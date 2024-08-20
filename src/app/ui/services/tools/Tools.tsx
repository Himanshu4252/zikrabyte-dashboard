import React from 'react';
import styles from './Tools.module.css';

interface ToolCardProps {
  toolName: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ toolName }) => {
  return (
    <div className={styles.card}>
      <img src={`/${toolName.replace(/ /g, '').toLowerCase()}.png`} alt={toolName} className={styles.icon} />
      <p className={styles.toolName}>{toolName}</p>
    </div>
  );
};

const Tools = () => {
  const tools = [
    'Adobe After Effects',
    'Airtable',
    'Lottie',
    'Creative Cloud',
    'Figjam',
    'Figma',
    'Notion',
    'Principle Prototypes',
    'Sketch',
    'Slack',
    'Webflow'
  ];

  return (
    <div className={styles.container}>
 <h2 className={styles.title}>TOOLS</h2>
 <div className={styles.line}></div>
      {tools.map((tool) => (
        <ToolCard key={tool} toolName={tool} />
      ))}
    </div>
  );
};

export default Tools;
