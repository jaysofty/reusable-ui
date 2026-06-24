// components/settings/profile-information-card.tsx
"use client";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const profileFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: 'Please enter a valid phone number.' }),
  bio: z.string().optional(),
  address: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const initialProfileValues: ProfileFormValues = {
  fullName: 'Adekunle Abowaba',
  email: 'kunlele.kunzy@gmail.com',
  phoneNumber: '+2349069903873',
  bio: '',
  address: '',
};

export function ProfileInformationCard() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: initialProfileValues,
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    // Submit data to API
  }

  return (
    <Card className=" border-none rounded-lg p-6">
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-xl font-semibold">Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="profilePicture" className="text-sm text-slate-400 font-normal">Profile Picture</Label>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-slate-700 bg-slate-800 flex items-center justify-center cursor-pointer group hover:border-slate-600 transition-colors">
            <Plus className="h-6 w-6 text-slate-600 group-hover:text-slate-500" />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="fullName" className="text-sm text-slate-400 font-normal">Full Name</Label>
                    <FormControl>
                      <Input {...field} className="bg-slate-800 border-slate-700 text-slate-100 rounded-md py-3 h-auto" />
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
                    <Label htmlFor="email" className="text-sm text-slate-400 font-normal">Email</Label>
                    <FormControl>
                      <Input {...field} type="email" className="bg-slate-800 border-slate-700 text-slate-100 rounded-md py-3 h-auto" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="phoneNumber" className="text-sm text-slate-400 font-normal">Phone Number:</Label>
                    <FormControl>
                      <Input {...field} className="bg-slate-800 border-slate-700 text-slate-100 rounded-md py-3 h-auto" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="bio" className="text-sm text-slate-400 font-normal">Bio</Label>
                  <FormControl>
                    <Textarea {...field} placeholder="Tell us about yourself" className="bg-slate-800 border-slate-700 text-slate-100 rounded-md pt-3 min-h-24 resize-y" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="address" className="text-sm text-slate-400 font-normal">Address</Label>
                  <FormControl>
                    <Textarea {...field} className="bg-slate-800 border-slate-700 text-slate-100 rounded-md pt-3 min-h-24 resize-y" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}