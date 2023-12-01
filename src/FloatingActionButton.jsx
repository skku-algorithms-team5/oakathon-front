import React from 'react';
import { Container, Button, lightColors } from 'react-floating-action-button';

const FloatingActionButton = () => {
  return (
    <Container styles={{ bottom: '0vh', right: '0vw' }}>
      <Button
        tooltip="Personal TA"
        icon="fas fa-robot"
        rotate={true}
        styles={{
          backgroundColor: lightColors.teal,
          color: lightColors.white,
        }}
        onClick={() => alert('chatbot 호출')}
      />
    </Container>
  );
};

export default FloatingActionButton;
