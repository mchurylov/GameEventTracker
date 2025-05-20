import { 
  users, type User, type InsertUser,
  subscribers, type Subscriber, type InsertSubscriber,
  events, type Event, type InsertEvent,
  notifications, type Notification, type InsertNotification
} from "@shared/schema";

// Storage interface with CRUD operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Subscriber operations
  getSubscribers(): Promise<Subscriber[]>;
  getSubscriber(id: number): Promise<Subscriber | undefined>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Event operations
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Notification operations
  getNotifications(): Promise<Notification[]>;
  getNotification(id: number): Promise<Notification | undefined>;
  createNotification(notification: InsertNotification): Promise<Notification>;
  markNotificationAsRead(id: number): Promise<Notification | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribersMap: Map<number, Subscriber>;
  private eventsMap: Map<number, Event>;
  private notificationsMap: Map<number, Notification>;
  
  private currentUserId: number;
  private currentSubscriberId: number;
  private currentEventId: number;
  private currentNotificationId: number;

  constructor() {
    this.users = new Map();
    this.subscribersMap = new Map();
    this.eventsMap = new Map();
    this.notificationsMap = new Map();
    
    this.currentUserId = 1;
    this.currentSubscriberId = 1;
    this.currentEventId = 1;
    this.currentNotificationId = 1;
    
    // Add some sample events
    const eventData: InsertEvent[] = [
      {
        title: "Opening Ceremony",
        description: "Welcome to the World Tournament Slots",
        startTime: new Date("2025-10-22T10:00:00"),
        endTime: new Date("2025-10-22T11:30:00"),
        location: "Grand Ballroom",
        day: 1
      },
      {
        title: "Qualifying Round 1",
        description: "First round of qualifying tournaments",
        startTime: new Date("2025-10-22T13:00:00"),
        endTime: new Date("2025-10-22T17:00:00"),
        location: "Casino Floor",
        day: 1
      },
      {
        title: "Welcome Dinner",
        description: "Networking dinner for all participants",
        startTime: new Date("2025-10-22T19:00:00"),
        endTime: new Date("2025-10-22T22:00:00"),
        location: "Poseidon Restaurant",
        day: 1
      },
      {
        title: "Qualifying Round 2",
        description: "Second round of qualifying tournaments",
        startTime: new Date("2025-10-23T10:00:00"),
        endTime: new Date("2025-10-23T14:00:00"),
        location: "Casino Floor",
        day: 2
      },
      {
        title: "Semi-Finals",
        description: "Semi-final tournaments",
        startTime: new Date("2025-10-24T10:00:00"),
        endTime: new Date("2025-10-24T16:00:00"),
        location: "VIP Lounge",
        day: 3
      },
      {
        title: "Grand Finals",
        description: "Championship round with top players",
        startTime: new Date("2025-10-25T14:00:00"),
        endTime: new Date("2025-10-25T18:00:00"),
        location: "Royal Arena",
        day: 4
      },
      {
        title: "Awards Ceremony",
        description: "Celebration and prize distribution",
        startTime: new Date("2025-10-25T20:00:00"),
        endTime: new Date("2025-10-25T22:00:00"),
        location: "Grand Ballroom",
        day: 4
      },
      {
        title: "Farewell Brunch",
        description: "Final gathering before departure",
        startTime: new Date("2025-10-26T10:00:00"),
        endTime: new Date("2025-10-26T12:00:00"),
        location: "Azure Terrace",
        day: 5
      }
    ];
    
    eventData.forEach(event => {
      this.createEvent(event);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Subscriber methods
  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribersMap.values());
  }
  
  async getSubscriber(id: number): Promise<Subscriber | undefined> {
    return this.subscribersMap.get(id);
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribersMap.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentSubscriberId++;
    const createdAt = new Date();
    const subscriber: Subscriber = { ...insertSubscriber, id, createdAt };
    this.subscribersMap.set(id, subscriber);
    return subscriber;
  }
  
  // Event methods
  async getEvents(): Promise<Event[]> {
    return Array.from(this.eventsMap.values());
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    return this.eventsMap.get(id);
  }
  
  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = { ...insertEvent, id };
    this.eventsMap.set(id, event);
    return event;
  }
  
  // Notification methods
  async getNotifications(): Promise<Notification[]> {
    return Array.from(this.notificationsMap.values());
  }
  
  async getNotification(id: number): Promise<Notification | undefined> {
    return this.notificationsMap.get(id);
  }
  
  async createNotification(insertNotification: InsertNotification): Promise<Notification> {
    const id = this.currentNotificationId++;
    const sentAt = new Date();
    const isRead = false;
    const notification: Notification = { ...insertNotification, id, sentAt, isRead };
    this.notificationsMap.set(id, notification);
    return notification;
  }
  
  async markNotificationAsRead(id: number): Promise<Notification | undefined> {
    const notification = this.notificationsMap.get(id);
    if (notification) {
      const updatedNotification = { ...notification, isRead: true };
      this.notificationsMap.set(id, updatedNotification);
      return updatedNotification;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
