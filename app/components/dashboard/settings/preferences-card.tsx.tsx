// components/settings/preferences-card.tsx
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
];

export function PreferencesCard() {
  const [screenMode, setScreenMode] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState('en');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

// Prevent hydration mismatch by ensuring this only renders on the client
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-card border-none rounded-lg p-6">
  <CardHeader className="p-0 pb-4">
    <CardTitle className="text-xl font-semibold text-card-foreground">Preferences</CardTitle>
  </CardHeader>
  {/* ... */}
      <CardContent className="p-0 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <Label className="text-slate-100 text-base font-medium">Screen Mode</Label>
            <p className="text-sm text-slate-400 font-normal">Switch between light and dark theme</p>
          </div>
          <div className="flex items-center space-x-2">
            <Moon className="h-5 w-5 text-slate-500" />
           <Switch 
        checked={theme === "dark"}
        onCheckedChange={(isChecked) => setTheme(isChecked ? "dark" : "light")}
      />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-slate-100 text-base font-medium">Language</Label>
          <p className="text-sm text-slate-400 font-normal">Set your preferred language</p>
          <div className="pt-2 flex justify-end">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full md:w-auto bg-slate-800 border-slate-700 text-slate-100 rounded-md py-3 px-6 h-auto min-w-48 justify-between hover:bg-slate-800">
              <SelectValue>{languages.find(lang => lang.value === language)?.label}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-slate-100">
              {languages.map(lang => (
                <SelectItem key={lang.value} value={lang.value}>{lang.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}