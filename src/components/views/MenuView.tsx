import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

type View = 'menu' | 'settings' | 'description' | 'account';

interface MenuViewProps {
  setCurrentView: (view: View) => void;
}

export const MenuView = ({ setCurrentView }: MenuViewProps) => (
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

        <Card 
          className="p-6 bg-card border-neon-purple/20 hover:border-neon-purple/40 transition-all cursor-pointer group hover:scale-105"
          onClick={() => setCurrentView('account')}
        >
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

        <Card 
          className="p-6 bg-card border-neon-pink/20 hover:border-neon-pink/40 transition-all cursor-pointer group hover:scale-105"
          onClick={() => setCurrentView('description')}
        >
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
