import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { videoState, updateQuestionState } from '../recoil/atoms';
import axios from 'axios';

import { Card, Input, Button, Modal, Spin } from 'antd';
import AssistanceIframe from './AssistanceIframe';

// const example = `"다이나믹 프로그래밍을 사용하는 상황과 그 특징에 대해 설명하고, 예시를 들어 그 프로세스를 설명해 보세요. 더불어 'Longest Common Subsequence', 'Washer’s Algorithm', 'Floyd’s Algorithm', 'Zero-One Knapsack Problem' 등에 대한 다이나믹 프로그래밍 접근법을 각각 설명하고, 이들 문제의 해결 과정에서 사용되는 점화식과 알고리즘의 시간 복잡도에 대해서도 간략히 설명해 주세요.`;

const QuizPage = () => {
  const [answer, setAnswer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFinishAnalysis, setIsFinishAnalysis] = useState(false);

  const [video, setVideo] = useRecoilState(videoState);
  const question = useRecoilValue(updateQuestionState);

  const nextVideoHandler = () => {
    const videoList = [
      'bf1.mp4',
      'bf2.mp4',
      'bf3.mp4',
      'dp1.mp4',
      'dp2.mp4',
      'dp3.mp4',
    ];
    const idx = videoList.indexOf(video);
    setVideo(videoList[idx + 1]);
  };

  const submitHandler = () => {
    setIsModalOpen(true);
    console.log('question: ', question);
    console.log('answer: ', answer);
    axios
      .post('http://127.0.0.1:8000/analyze_result', {
        question: question,
        answer: answer,
      })
      .then((res) => {
        console.log(res.data);
        setAnswer(res.data.analyze_result);
        setIsModalOpen(false);
        setIsFinishAnalysis(true);
      })
      .catch((err) => {
        console.log(err);
        setIsModalOpen(false);
        setIsFinishAnalysis(true);
      });
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
        }}
      >
        <div>
          <div style={{ height: 70, marginTop: 80 }}>
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          </div>
          <div style={{ marginBottom: 50 }}>답변을 분석하는 중...</div>
        </div>
      </div>
    </Modal>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      {modal}
      <div style={{ width: '60%', marginRight: 5 }}>
        <Card style={{ textAlign: 'center', background: '#EFF1FF' }}>
          <div style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>
            Question
          </div>
          <hr />
          {question}
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
              background: '#EFF1FF',
              marginTop: 10,
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>
              채점 결과
            </div>
            <Input.TextArea value={answer} autoSize></Input.TextArea>
            <div style={{ height: 10 }} />
            <div style={{ float: 'right' }}>
              <Link to="/">
                <Button type="primary" onClick={nextVideoHandler}>
                  다음 학습으로
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </div>
      <div style={{ minHeight: '80vh' }}>
        <AssistanceIframe />
      </div>
    </div>
  );
};

export default QuizPage;
