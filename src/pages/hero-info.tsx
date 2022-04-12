import { useParams } from 'react-router-dom';

const HeroInfo: React.FC = () => {
  const { name } = useParams();

  return <>{name}</>;
};

export default HeroInfo;
