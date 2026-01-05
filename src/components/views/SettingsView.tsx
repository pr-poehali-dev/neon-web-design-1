import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

type View = 'menu' | 'settings' | 'description' | 'account';

interface SettingsViewProps {
  setCurrentView: (view: View) => void;
  groupName: string;
  setGroupName: (value: string) => void;
  autoModeration: boolean;
  setAutoModeration: (value: boolean) => void;
  welcomeMessage: boolean;
  setWelcomeMessage: (value: boolean) => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
}

export const SettingsView = ({
  setCurrentView,
  groupName,
  setGroupName,
  autoModeration,
  setAutoModeration,
  welcomeMessage,
  setWelcomeMessage,
  notifications,
  setNotifications
}: SettingsViewProps) => (
  <div className="min-h-screen bg-background p-6">
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setCurrentView('menu')}
          className="neon-glow-blue"
        >
          <Icon name="ArrowLeft" size={24} className="text-neon-blue" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold neon-text-blue">Настройка группы</h1>
          <p className="text-muted-foreground">Управление параметрами чата</p>
        </div>
      </div>

      <Card className="p-6 bg-card border-neon-blue/20 neon-glow-blue">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="groupName" className="text-lg text-neon-blue">Название группы</Label>
            <Input 
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="bg-muted border-neon-blue/30 focus:border-neon-blue text-foreground text-lg p-6"
            />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-lg text-neon-purple">Автомодерация</Label>
              <p className="text-sm text-muted-foreground">Автоматическая фильтрация спама</p>
            </div>
            <Switch 
              checked={autoModeration}
              onCheckedChange={setAutoModeration}
              className="data-[state=checked]:bg-neon-purple"
            />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-lg text-neon-pink">Приветственное сообщение</Label>
              <p className="text-sm text-muted-foreground">Отправлять приветствие новым участникам</p>
            </div>
            <Switch 
              checked={welcomeMessage}
              onCheckedChange={setWelcomeMessage}
              className="data-[state=checked]:bg-neon-pink"
            />
          </div>

          <div className="h-px bg-border" />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-lg text-neon-blue">Уведомления</Label>
              <p className="text-sm text-muted-foreground">Push-уведомления о событиях</p>
            </div>
            <Switch 
              checked={notifications}
              onCheckedChange={setNotifications}
              className="data-[state=checked]:bg-neon-blue"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-neon-purple/20">
        <h3 className="text-xl font-semibold text-neon-purple mb-4 flex items-center gap-2">
          <Icon name="Users" size={24} />
          Участники
        </h3>
        <div className="space-y-3">
          {[
            { name: 'Александр', role: 'Администратор', online: true },
            { name: 'Мария', role: 'Модератор', online: true },
            { name: 'Иван', role: 'Участник', online: false }
          ].map((user, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className={`w-2 h-2 rounded-full ${user.online ? 'bg-neon-blue animate-pulse-neon' : 'bg-muted-foreground'}`} />
              <div className="flex-1">
                <p className="font-medium text-foreground">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Button className="w-full p-6 bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold text-lg neon-glow-blue">
        <Icon name="Save" size={24} className="mr-2" />
        Сохранить изменения
      </Button>
    </div>
  </div>
);
