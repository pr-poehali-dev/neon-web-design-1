import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

type View = 'menu' | 'settings';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('menu');
  const [groupName, setGroupName] = useState('Моя группа');
  const [autoModeration, setAutoModeration] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const MenuView = () => (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-block p-4 rounded-2xl bg-card neon-glow-blue mb-4">
            <Icon name="MessageCircle" size={48} className="text-neon-blue" />
          </div>
          <h1 className="text-4xl font-bold neon-text-blue mb-2">ChatManager</h1>
          <p className="text-muted-foreground">Управление чатами Telegram</p>
        </div>

        <div className="space-y-4">
          <Card 
            className="p-6 bg-card border-neon-blue/20 hover:border-neon-blue/40 transition-all cursor-pointer group neon-glow-blue hover:scale-105"
            onClick={() => setCurrentView('settings')}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors">
                <Icon name="MessagesSquare" size={28} className="text-neon-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neon-blue">Мои чаты</h3>
                <p className="text-sm text-muted-foreground">3 активных группы</p>
              </div>
              <Icon name="ChevronRight" size={24} className="text-neon-blue opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </Card>

          <Card className="p-6 bg-card border-neon-purple/20 hover:border-neon-purple/40 transition-all cursor-pointer group hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-colors">
                <Icon name="User" size={28} className="text-neon-purple" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neon-purple">Мой аккаунт</h3>
                <p className="text-sm text-muted-foreground">Настройки профиля</p>
              </div>
              <Icon name="ChevronRight" size={24} className="text-neon-purple opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </Card>

          <Card className="p-6 bg-card border-neon-pink/20 hover:border-neon-pink/40 transition-all cursor-pointer group hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neon-pink/10 group-hover:bg-neon-pink/20 transition-colors">
                <Icon name="Info" size={28} className="text-neon-pink" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neon-pink">Описание</h3>
                <p className="text-sm text-muted-foreground">О приложении</p>
              </div>
              <Icon name="ChevronRight" size={24} className="text-neon-pink opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </Card>

          <Button 
            variant="outline" 
            className="w-full p-6 border-destructive/30 hover:border-destructive hover:bg-destructive/10 transition-all group"
          >
            <Icon name="LogOut" size={24} className="mr-3 text-destructive" />
            <span className="text-lg text-destructive">Выход</span>
          </Button>
        </div>
      </div>
    </div>
  );

  const SettingsView = () => (
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

  return currentView === 'menu' ? <MenuView /> : <SettingsView />;
};

export default Index;
