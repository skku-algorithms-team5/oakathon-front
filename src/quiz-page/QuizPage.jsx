import { useState } from 'react';
import { Card, Input, Button, Modal } from 'antd';

const example = `"다이나믹 프로그래밍을 사용하는 상황과 그 특징에 대해 설명하고, 예시를 들어 그 프로세스를 설명해 보세요. 더불어 'Longest Common Subsequence', 'Washer’s Algorithm', 'Floyd’s Algorithm', 'Zero-One Knapsack Problem' 등에 대한 다이나믹 프로그래밍 접근법을 각각 설명하고, 이들 문제의 해결 과정에서 사용되는 점화식과 알고리즘의 시간 복잡도에 대해서도 간략히 설명해 주세요.`;

const QuizPage = () => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFinishAnalysis, setIsFinishAnalysis] = useState(false);

  const submitHandler = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsFinishAnalysis(true);
    }, 2000);
  };

  const modal = (
    <Modal open={isModalOpen} footer={[]}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 200,
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        <div>정답을 분석하는 중...</div>
      </div>
    </Modal>
  );

  return (
    <div>
      {modal}
      <Card
        style={{ textAlign: 'center', width: '80%', background: '#EFF1FF' }}
      >
        <div style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>
          Question
        </div>
        <hr />
        {example}
        <div style={{ height: 10 }} />
        <Input.TextArea
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          rows={4}
        ></Input.TextArea>
        <div style={{ height: 10 }} />
        <div style={{ float: 'right' }}>
          <Button type="primary" onClick={submitHandler}>
            제출하기
          </Button>
        </div>
      </Card>
      {/** 분석 결과 */}
      {isFinishAnalysis && (
        <Card
          style={{
            textAlign: 'center',
            width: '80%',
            background: '#EFF1FF',
            marginTop: 10,
          }}
        >
          <div style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>
            분석 결과
          </div>
          <Input.TextArea value={example} autoSize></Input.TextArea>
          <div style={{ height: 10 }} />
          <div style={{ float: 'right' }}>
            <Button type="primary" onClick={submitHandler}>
              다음 학습으로
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default QuizPage;
