import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

type View = 'menu' | 'settings' | 'description' | 'account';

interface AccountViewProps {
  setCurrentView: (view: View) => void;
  userName: string;
  setUserName: (value: string) => void;
  userBio: string;
  setUserBio: (value: string) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean) => void;
  emailNotifications: boolean;
  setEmailNotifications: (value: boolean) => void;
}

export const AccountView = ({
  setCurrentView,
  userName,
  setUserName,
  userBio,
  setUserBio,
  darkMode,
  setDarkMode,
  soundEnabled,
  setSoundEnabled,
  emailNotifications,
  setEmailNotifications,
}: AccountViewProps) => (
  <div className="min-h-screen bg-background p-4">
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setCurrentView('menu')}
          className="neon-glow-purple"
        >
          <Icon name="ArrowLeft" size={24} className="text-neon-purple" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold neon-text-purple">Мой аккаунт</h1>
          <p className="text-muted-foreground">Управление профилем и настройками</p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <ScrollArea className="w-full">
          <TabsList className="w-full inline-flex h-auto flex-nowrap bg-card border border-border p-1 mb-6">
            <TabsTrigger 
              value="profile" 
              className="flex-shrink-0 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple data-[state=active]:neon-glow-purple whitespace-nowrap"
            >
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className="flex-shrink-0 data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue whitespace-nowrap"
            >
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
            <TabsTrigger 
              value="stats" 
              className="flex-shrink-0 data-[state=active]:bg-neon-pink/20 data-[state=active]:text-neon-pink whitespace-nowrap"
            >
              <Icon name="BarChart3" size={16} className="mr-2" />
              Статистика
            </TabsTrigger>
            <TabsTrigger 
              value="security" 
              className="flex-shrink-0 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple whitespace-nowrap"
            >
              <Icon name="ShieldCheck" size={16} className="mr-2" />
              Безопасность
            </TabsTrigger>
          </TabsList>
        </ScrollArea>

        <TabsContent value="profile" className="space-y-4 animate-fade-in">
          <Card className="p-6 bg-card border-neon-purple/20 neon-glow-purple">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mb-4 neon-glow-purple">
                <Icon name="User" size={48} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-neon-purple mb-1">{userName}</h2>
              <p className="text-muted-foreground">{userBio}</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userName" className="text-lg text-neon-purple">Имя пользователя</Label>
                <Input 
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="bg-muted border-neon-purple/30 focus:border-neon-purple text-foreground text-lg p-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="userBio" className="text-lg text-neon-purple">О себе</Label>
                <Input 
                  id="userBio"
                  value={userBio}
                  onChange={(e) => setUserBio(e.target.value)}
                  className="bg-muted border-neon-purple/30 focus:border-neon-purple text-foreground text-lg p-6"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-neon-blue/20">
            <h3 className="text-xl font-semibold text-neon-blue mb-4 flex items-center gap-2">
              <Icon name="AtSign" size={24} />
              Telegram
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-foreground">ID пользователя</span>
                <code className="text-neon-blue">123456789</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-foreground">Username</span>
                <code className="text-neon-blue">@alex_admin</code>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-foreground">Статус</span>
                <span className="text-neon-blue flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                  Онлайн
                </span>
              </div>
            </div>
          </Card>

          <Button className="w-full p-6 bg-neon-purple hover:bg-neon-purple/80 text-white font-semibold text-lg neon-glow-purple">
            <Icon name="Save" size={24} className="mr-2" />
            Сохранить изменения
          </Button>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 animate-fade-in">
          <Card className="p-6 bg-card border-neon-blue/20 neon-glow-blue">
            <h3 className="text-xl font-semibold text-neon-blue mb-4 flex items-center gap-2">
              <Icon name="Palette" size={24} />
              Внешний вид
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-lg text-foreground">Темная тема</Label>
                  <p className="text-sm text-muted-foreground">Использовать темное оформление</p>
                </div>
                <Switch 
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  className="data-[state=checked]:bg-neon-blue"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-neon-purple/20">
            <h3 className="text-xl font-semibold text-neon-purple mb-4 flex items-center gap-2">
              <Icon name="Bell" size={24} />
              Уведомления
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-lg text-foreground">Звуковые уведомления</Label>
                  <p className="text-sm text-muted-foreground">Воспроизводить звук при событиях</p>
                </div>
                <Switch 
                  checked={soundEnabled}
                  onCheckedChange={setSoundEnabled}
                  className="data-[state=checked]:bg-neon-purple"
                />
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-lg text-foreground">Email-уведомления</Label>
                  <p className="text-sm text-muted-foreground">Получать письма о важных событиях</p>
                </div>
                <Switch 
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  className="data-[state=checked]:bg-neon-purple"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-neon-pink/20">
            <h3 className="text-xl font-semibold text-neon-pink mb-4 flex items-center gap-2">
              <Icon name="Globe" size={24} />
              Язык и регион
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <Label className="text-foreground mb-2 block">Язык интерфейса</Label>
                <select className="w-full bg-background border border-neon-pink/30 rounded-lg p-3 text-foreground">
                  <option>Русский</option>
                  <option>English</option>
                  <option>Українська</option>
                </select>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <Label className="text-foreground mb-2 block">Часовой пояс</Label>
                <select className="w-full bg-background border border-neon-pink/30 rounded-lg p-3 text-foreground">
                  <option>UTC+3 (Москва)</option>
                  <option>UTC+2 (Киев)</option>
                  <option>UTC+0 (London)</option>
                </select>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4 animate-fade-in">
          <Card className="p-6 bg-card border-neon-pink/20 neon-glow-pink">
            <h3 className="text-xl font-semibold text-neon-pink mb-4 flex items-center gap-2">
              <Icon name="TrendingUp" size={24} />
              Активность
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-lg border border-neon-blue/30">
                <div className="text-3xl font-bold text-neon-blue mb-1">247</div>
                <div className="text-sm text-muted-foreground">Сообщений отправлено</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-neon-purple/10 to-transparent rounded-lg border border-neon-purple/30">
                <div className="text-3xl font-bold text-neon-purple mb-1">18</div>
                <div className="text-sm text-muted-foreground">Дней активности</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-neon-pink/10 to-transparent rounded-lg border border-neon-pink/30">
                <div className="text-3xl font-bold text-neon-pink mb-1">3</div>
                <div className="text-sm text-muted-foreground">Управляемых чатов</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-lg border border-neon-blue/30">
                <div className="text-3xl font-bold text-neon-blue mb-1">42</div>
                <div className="text-sm text-muted-foreground">Модераций выполнено</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-neon-blue/20">
            <h3 className="text-xl font-semibold text-neon-blue mb-4 flex items-center gap-2">
              <Icon name="Award" size={24} />
              Достижения
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-neon-purple/10 to-transparent rounded-lg border border-neon-purple/30">
                <div className="text-3xl">🏆</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Первые шаги</p>
                  <p className="text-sm text-muted-foreground">Создан первый чат</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-neon-blue/10 to-transparent rounded-lg border border-neon-blue/30">
                <div className="text-3xl">⚡</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Молниеносный</p>
                  <p className="text-sm text-muted-foreground">100+ сообщений за день</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border opacity-50">
                <div className="text-3xl">🔒</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Защитник</p>
                  <p className="text-sm text-muted-foreground">50 модераций (32/50)</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4 animate-fade-in">
          <Card className="p-6 bg-card border-neon-purple/20 neon-glow-purple">
            <h3 className="text-xl font-semibold text-neon-purple mb-4 flex items-center gap-2">
              <Icon name="Lock" size={24} />
              Безопасность аккаунта
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">Двухфакторная аутентификация</span>
                  <span className="text-sm text-neon-blue">Активна</span>
                </div>
                <p className="text-sm text-muted-foreground">Дополнительная защита вашего аккаунта</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">Последний вход</span>
                  <span className="text-sm text-neon-purple">Сегодня, 14:23</span>
                </div>
                <p className="text-sm text-muted-foreground">Москва, Россия</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-neon-pink/20">
            <h3 className="text-xl font-semibold text-neon-pink mb-4 flex items-center gap-2">
              <Icon name="Key" size={24} />
              Активные сессии
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-neon-pink">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-foreground flex items-center gap-2">
                      <Icon name="Smartphone" size={16} />
                      iPhone 13 Pro
                    </p>
                    <p className="text-sm text-muted-foreground">Москва • Сейчас активна</p>
                  </div>
                  <span className="text-xs text-neon-pink">Текущая</span>
                </div>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-foreground flex items-center gap-2">
                      <Icon name="Monitor" size={16} />
                      Windows PC
                    </p>
                    <p className="text-sm text-muted-foreground">Москва • 2 часа назад</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    Завершить
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Button variant="outline" className="w-full p-6 border-destructive/30 hover:border-destructive hover:bg-destructive/10 transition-all">
            <Icon name="LogOut" size={24} className="mr-2 text-destructive" />
            <span className="text-lg text-destructive">Завершить все сессии</span>
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  </div>
);
