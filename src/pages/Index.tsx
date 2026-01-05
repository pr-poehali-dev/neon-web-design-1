import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

type View = 'menu' | 'settings' | 'description' | 'account';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('menu');
  const [groupName, setGroupName] = useState('Моя группа');
  const [autoModeration, setAutoModeration] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const [notifications, setNotifications] = useState(true);
  
  const [userName, setUserName] = useState('Александр');
  const [userBio, setUserBio] = useState('Администратор ChatManager');
  const [darkMode, setDarkMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);

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

  const DescriptionView = () => (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setCurrentView('menu')}
            className="neon-glow-pink"
          >
            <Icon name="ArrowLeft" size={24} className="text-neon-pink" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold neon-text-pink">Описание</h1>
            <p className="text-muted-foreground">Полная информация о боте</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <ScrollArea className="w-full">
            <TabsList className="w-full inline-flex h-auto flex-nowrap bg-card border border-border p-1 mb-6">
              <TabsTrigger 
                value="general" 
                className="flex-shrink-0 data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue data-[state=active]:neon-glow-blue whitespace-nowrap"
              >
                <Icon name="Home" size={16} className="mr-2" />
                Общее
              </TabsTrigger>
              <TabsTrigger 
                value="commands" 
                className="flex-shrink-0 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple whitespace-nowrap"
              >
                <Icon name="Terminal" size={16} className="mr-2" />
                Команды
              </TabsTrigger>
              <TabsTrigger 
                value="moderation" 
                className="flex-shrink-0 data-[state=active]:bg-neon-pink/20 data-[state=active]:text-neon-pink whitespace-nowrap"
              >
                <Icon name="Shield" size={16} className="mr-2" />
                Модерация
              </TabsTrigger>
              <TabsTrigger 
                value="games" 
                className="flex-shrink-0 data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue whitespace-nowrap"
              >
                <Icon name="Gamepad2" size={16} className="mr-2" />
                Игры
              </TabsTrigger>
              <TabsTrigger 
                value="access" 
                className="flex-shrink-0 data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple whitespace-nowrap"
              >
                <Icon name="Key" size={16} className="mr-2" />
                Доступы ДК
              </TabsTrigger>
              <TabsTrigger 
                value="replies" 
                className="flex-shrink-0 data-[state=active]:bg-neon-pink/20 data-[state=active]:text-neon-pink whitespace-nowrap"
              >
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Реплики
              </TabsTrigger>
              <TabsTrigger 
                value="event" 
                className="flex-shrink-0 data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue whitespace-nowrap"
              >
                <Icon name="Sparkles" size={16} className="mr-2" />
                Ивент
              </TabsTrigger>
            </TabsList>
          </ScrollArea>

          <TabsContent value="general" className="space-y-4 animate-fade-in">
            <Card className="p-6 bg-card border-neon-blue/20 neon-glow-blue">
              <h3 className="text-xl font-semibold text-neon-blue mb-4 flex items-center gap-2">
                <Icon name="Info" size={24} />
                Основная информация
              </h3>
              <div className="space-y-3 text-foreground">
                <p>🤖 <strong>ChatManager</strong> — мощный бот для управления Telegram-группами с расширенным функционалом.</p>
                <p>✨ Автоматизирует модерацию, приветствия, статистику и развлекательные функции.</p>
                <p>🔧 Настраиваемые права доступа и гибкая система команд.</p>
              </div>
            </Card>
            <Card className="p-6 bg-card border-neon-purple/20">
              <h3 className="text-xl font-semibold text-neon-purple mb-4 flex items-center gap-2">
                <Icon name="Star" size={24} />
                Основные возможности
              </h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Автоматическая модерация сообщений</li>
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Система приветствий новых участников</li>
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Мини-игры и развлечения</li>
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Статистика активности чата</li>
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Кастомные реплики и автоответы</li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="commands" className="space-y-4 animate-fade-in">
            <Card className="p-6 bg-card border-neon-purple/20">
              <h3 className="text-xl font-semibold text-neon-purple mb-4 flex items-center gap-2">
                <Icon name="Zap" size={24} />
                Базовые команды
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-blue">/start</code>
                  <p className="text-sm text-muted-foreground mt-1">Запуск бота и приветствие</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-blue">/help</code>
                  <p className="text-sm text-muted-foreground mt-1">Список всех доступных команд</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-blue">/stats</code>
                  <p className="text-sm text-muted-foreground mt-1">Статистика чата и участников</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-blue">/rules</code>
                  <p className="text-sm text-muted-foreground mt-1">Правила группы</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="moderation" className="space-y-4 animate-fade-in">
            <Card className="p-6 bg-card border-neon-pink/20 neon-glow-pink">
              <h3 className="text-xl font-semibold text-neon-pink mb-4 flex items-center gap-2">
                <Icon name="ShieldCheck" size={24} />
                Модерация и управление
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-pink">/ban @user</code>
                  <p className="text-sm text-muted-foreground mt-1">Заблокировать пользователя</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-pink">/kick @user</code>
                  <p className="text-sm text-muted-foreground mt-1">Удалить из группы</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-pink">/mute @user [time]</code>
                  <p className="text-sm text-muted-foreground mt-1">Отключить сообщения на время</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-pink">/warn @user</code>
                  <p className="text-sm text-muted-foreground mt-1">Выдать предупреждение</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card border-neon-purple/20">
              <h3 className="text-xl font-semibold text-neon-purple mb-4">⚙️ Настройки группы</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Автоматическое удаление ссылок</li>
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Фильтр матов и спама</li>
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Система варнов (3 = бан)</li>
                <li className="flex items-start gap-2"><span className="text-neon-purple">•</span> Капча для новых участников</li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="games" className="space-y-4 animate-fade-in">
            <Card className="p-6 bg-card border-neon-blue/20 neon-glow-blue">
              <h3 className="text-xl font-semibold text-neon-blue mb-4 flex items-center gap-2">
                <Icon name="Dice5" size={24} />
                Мини-игры
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-blue">/dice</code>
                  <p className="text-sm text-muted-foreground mt-1">🎲 Бросить кубик (1-6)</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-blue">/coin</code>
                  <p className="text-sm text-muted-foreground mt-1">🪙 Подбросить монетку</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-blue">/8ball [вопрос]</code>
                  <p className="text-sm text-muted-foreground mt-1">🔮 Магический шар предсказаний</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-neon-blue">/roll [max]</code>
                  <p className="text-sm text-muted-foreground mt-1">🎰 Случайное число от 1 до max</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="access" className="space-y-4 animate-fade-in">
            <Card className="p-6 bg-card border-neon-purple/20">
              <h3 className="text-xl font-semibold text-neon-purple mb-4 flex items-center gap-2">
                <Icon name="Lock" size={24} />
                Доступы ДК (Dev-команды)
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-destructive">
                  <code className="text-destructive">/admin add @user</code>
                  <p className="text-sm text-muted-foreground mt-1">🔐 Выдать права администратора</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-destructive">
                  <code className="text-destructive">/admin remove @user</code>
                  <p className="text-sm text-muted-foreground mt-1">🔓 Забрать права администратора</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-destructive">
                  <code className="text-destructive">/debug</code>
                  <p className="text-sm text-muted-foreground mt-1">🔧 Диагностика бота</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-destructive">
                  <code className="text-destructive">/logs</code>
                  <p className="text-sm text-muted-foreground mt-1">📋 Логи последних действий</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                <p className="text-sm text-destructive flex items-start gap-2">
                  <Icon name="AlertTriangle" size={16} className="mt-0.5" />
                  <span>Доступно только владельцу бота</span>
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="replies" className="space-y-4 animate-fade-in">
            <Card className="p-6 bg-card border-neon-pink/20 neon-glow-pink">
              <h3 className="text-xl font-semibold text-neon-pink mb-4 flex items-center gap-2">
                <Icon name="MessagesSquare" size={24} />
                Кастомные реплики
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium text-foreground">Привет / Здарова</p>
                  <p className="text-sm text-muted-foreground mt-1">→ Привет! 👋 Как дела?</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium text-foreground">Как дела?</p>
                  <p className="text-sm text-muted-foreground mt-1">→ У меня всё отлично! А у тебя? 😊</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium text-foreground">Спасибо</p>
                  <p className="text-sm text-muted-foreground mt-1">→ Всегда пожалуйста! 🤗</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="font-medium text-foreground">Пока / Бб</p>
                  <p className="text-sm text-muted-foreground mt-1">→ До встречи! 👋</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card border-neon-blue/20">
              <p className="text-sm text-muted-foreground">
                💡 Администраторы могут добавлять свои реплики через команду <code className="text-neon-blue">/addreply</code>
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="event" className="space-y-4 animate-fade-in">
            <Card className="p-6 bg-card border-neon-blue/20 neon-glow-blue">
              <h3 className="text-2xl font-semibold text-neon-blue mb-4 flex items-center gap-2">
                <Icon name="Snowflake" size={28} />
                Новогодний Ивент 🎄
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg border border-neon-blue/30">
                  <h4 className="font-semibold text-lg text-neon-purple mb-2">🎁 Адвент-календарь</h4>
                  <p className="text-foreground">Каждый день — новый подарок! Открывай ячейки календаря и получай бонусы, стикеры и эксклюзивные роли.</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-lg border border-neon-purple/30">
                  <h4 className="font-semibold text-lg text-neon-pink mb-2">❄️ Снежки</h4>
                  <p className="text-foreground">Кидай виртуальные снежки в друзей командой <code className="text-neon-pink">/snowball @user</code></p>
                </div>
                <div className="p-4 bg-gradient-to-r from-neon-pink/10 to-neon-blue/10 rounded-lg border border-neon-pink/30">
                  <h4 className="font-semibold text-lg text-neon-blue mb-2">🎅 Тайный Санта</h4>
                  <p className="text-foreground">Участвуй в обмене подарками! Регистрация: <code className="text-neon-blue">/santa join</code></p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-lg text-neon-purple mb-2">🏆 Новогодний рейтинг</h4>
                  <ul className="space-y-1 text-foreground">
                    <li>🥇 1 место — роль "Король Нового Года"</li>
                    <li>🥈 2 место — премиум-стикерпак</li>
                    <li>🥉 3 место — эксклюзивный бейдж</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card border-neon-purple/20">
              <p className="text-center text-muted-foreground">
                ⏰ Ивент активен с <strong className="text-neon-purple">1 декабря</strong> по <strong className="text-neon-pink">10 января</strong>
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  const AccountView = () => (
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

  return currentView === 'menu' ? <MenuView /> : currentView === 'settings' ? <SettingsView /> : currentView === 'description' ? <DescriptionView /> : <AccountView />;
};

export default Index;