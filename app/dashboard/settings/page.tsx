"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Settings as SettingsIcon, ShieldCheck } from 'lucide-react';
import { ProfileInformationCard } from '@/app/components/dashboard/settings/profile-information-card';
import { PreferencesCard } from '@/app/components/dashboard/settings/preferences-card.tsx';


export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('General');

  return (
    <div className="flex-1 flex flex-col p-8 space-y-8 bg-background min-h-screen">
      {/* Header Section */}
      <div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
          <span>Dashboard</span>
          <span>{'>'}</span>
          <span className="text-foreground font-medium">Settings</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
      </div>

      <div className="flex flex-1 gap-8 items-start">
        {/* Secondary Sidebar */}
        <aside className="w-56 flex-shrink-0 space-y-1">
          <button
            onClick={() => setActiveTab('General')}
            className={cn(
              "flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-md transition-all",
              activeTab === 'General' 
                ? "bg-rose-500 text-white shadow-sm" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <SettingsIcon className="mr-3 h-4 w-4" />
            General
          </button>
          <button
            onClick={() => setActiveTab('Security')}
            className={cn(
              "flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-md transition-all",
              activeTab === 'Security' 
                ? "bg-rose-500 text-white shadow-sm" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <ShieldCheck className="mr-3 h-4 w-4" />
            Security
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8 max-w-4xl">
          {activeTab === 'General' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <ProfileInformationCard />
              <PreferencesCard />
              
              <div className="flex justify-end pt-4 border-t border-border">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                  Save Changes
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'Security' && (
            <div className="p-8 bg-card rounded-lg border border-border text-card-foreground animate-in fade-in duration-500">
              <h2 className="text-lg font-semibold mb-2">Security Settings</h2>
              <p className="text-muted-foreground">Manage your account security and authentication here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}