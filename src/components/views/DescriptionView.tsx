import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

type View = 'menu' | 'settings' | 'description' | 'account';

interface DescriptionViewProps {
  setCurrentView: (view: View) => void;
}

export const DescriptionView = ({ setCurrentView }: DescriptionViewProps) => (
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
