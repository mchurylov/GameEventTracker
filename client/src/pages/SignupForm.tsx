import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { validatedSubscriberSchema } from '@shared/schema';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import MobileLayout from '@/components/MobileLayout';
import { Loader2 } from 'lucide-react';

type FormData = z.infer<typeof validatedSubscriberSchema>;

const SignupForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(validatedSubscriberSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  });
  
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest('POST', '/api/subscribers', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success!',
        description: 'You have been subscribed to updates.',
        variant: 'default'
      });
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to subscribe. Please try again.',
        variant: 'destructive'
      });
    }
  });
  
  const onSubmit = (data: FormData) => {
    mutate(data);
  };
  
  return (
    <MobileLayout>
      <motion.div
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-gold text-center text-2xl font-bold mb-6">
          Get Event Updates
        </h1>
        
        {submitted ? (
          <motion.div
            className="bg-[#222] border border-gold rounded-lg p-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-gold text-xl mb-4">Thank You!</h2>
            <p className="text-white mb-6">
              You're now signed up to receive updates about the World Tournament Slots event. 
              We'll keep you informed about the latest news and exclusive offers.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-gold hover:bg-[#ffec8b] text-black font-bold"
            >
              Sign Up Another Email
            </Button>
          </motion.div>
        ) : (
          <div className="bg-[#222] border border-gold rounded-lg p-6">
            <p className="text-white mb-6">
              Sign up to receive exclusive updates, special offers, and important information about the 
              World Tournament Slots event. Be the first to know about schedule changes and VIP opportunities.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          className="bg-[#333] border-[#444] text-white focus:border-gold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="bg-[#333] border-[#444] text-white focus:border-gold"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-[#ffec8b] text-black font-bold"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
            
            <div className="mt-6 text-xs text-gray-400">
              <p>By signing up, you agree to receive emails about this event. Your information will never be shared with third parties.</p>
            </div>
          </div>
        )}
      </motion.div>
    </MobileLayout>
  );
};

export default SignupForm;
