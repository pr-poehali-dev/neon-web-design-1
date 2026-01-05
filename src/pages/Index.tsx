import { useState } from 'react';
import { MenuView } from '@/components/views/MenuView';
import { SettingsView } from '@/components/views/SettingsView';
import { DescriptionView } from '@/components/views/DescriptionView';
import { AccountView } from '@/components/views/AccountView';

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

  if (currentView === 'menu') {
    return <MenuView setCurrentView={setCurrentView} />;
  }

  if (currentView === 'settings') {
    return (
      <SettingsView
        setCurrentView={setCurrentView}
        groupName={groupName}
        setGroupName={setGroupName}
        autoModeration={autoModeration}
        setAutoModeration={setAutoModeration}
        welcomeMessage={welcomeMessage}
        setWelcomeMessage={setWelcomeMessage}
        notifications={notifications}
        setNotifications={setNotifications}
      />
    );
  }

  if (currentView === 'description') {
    return <DescriptionView setCurrentView={setCurrentView} />;
  }

  if (currentView === 'account') {
    return (
      <AccountView
        setCurrentView={setCurrentView}
        userName={userName}
        setUserName={setUserName}
        userBio={userBio}
        setUserBio={setUserBio}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        emailNotifications={emailNotifications}
        setEmailNotifications={setEmailNotifications}
      />
    );
  }

  return <MenuView setCurrentView={setCurrentView} />;
};

export default Index;
