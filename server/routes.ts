import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { validatedSubscriberSchema, insertNotificationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  
  // Subscriber routes
  app.post("/api/subscribers", async (req, res) => {
    try {
      // Validate request body
      const validatedData = validatedSubscriberSchema.parse(req.body);
      
      // Check if subscriber with email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        return res.status(409).json({ 
          message: "A subscriber with this email already exists" 
        });
      }
      
      // Create new subscriber
      const subscriber = await storage.createSubscriber(validatedData);
      res.status(201).json(subscriber);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map(e => ({
          path: e.path.join('.'),
          message: e.message
        }));
        return res.status(400).json({ errors: formattedErrors });
      }
      
      res.status(500).json({ message: "Failed to create subscriber" });
    }
  });
  
  // Get all subscribers
  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscribers" });
    }
  });
  
  // Event routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });
  
  // Get event by ID
  app.get("/api/events/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid event ID" });
      }
      
      const event = await storage.getEvent(id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });
  
  // Notification routes
  app.post("/api/notifications", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertNotificationSchema.parse(req.body);
      
      // Create new notification
      const notification = await storage.createNotification(validatedData);
      res.status(201).json(notification);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map(e => ({
          path: e.path.join('.'),
          message: e.message
        }));
        return res.status(400).json({ errors: formattedErrors });
      }
      
      res.status(500).json({ message: "Failed to create notification" });
    }
  });
  
  // Get all notifications
  app.get("/api/notifications", async (req, res) => {
    try {
      const notifications = await storage.getNotifications();
      res.json(notifications);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });
  
  // Mark notification as read
  app.patch("/api/notifications/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid notification ID" });
      }
      
      const notification = await storage.markNotificationAsRead(id);
      if (!notification) {
        return res.status(404).json({ message: "Notification not found" });
      }
      
      res.json(notification);
    } catch (error) {
      res.status(500).json({ message: "Failed to update notification" });
    }
  });

  const httpServer = createServer(app);
  
  return httpServer;
}
