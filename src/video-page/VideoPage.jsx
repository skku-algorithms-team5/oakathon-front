import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { videoState } from '../recoil/atoms';

const VideoPage = () => {
  const video = useRecoilValue(videoState);

  const btn = (
    <div>
      <Button
        type="text"
        style={{
          marginRight: 10,
          width: '45%',
          height: 40,
          fontWeight: 'bold',
        }}
      >
        이전
      </Button>
      <Link to="/quiz">
        <Button
          type="text"
          style={{ width: '45%', height: 40, fontWeight: 'bold' }}
        >
          다음
        </Button>
      </Link>
    </div>
  );
  return (
    <div style={{ width: 1100, textAlign: 'center' }}>
      <Card style={{ fontSize: 20 }} title={btn}>
        <video key={video} autoPlay loop style={{ width: 1000 }} controls>
          <source src={`/videos/${video}`} type="video/mp4" />
        </video>
      </Card>
    </div>
  );
};

export default VideoPage;
