const AssistanceIframe = () => {
  const url = 'http://localhost:8501/';
  return (
    <iframe
      title="streamlit"
      src={url}
      width={500}
      height={'100%'}
      frameBorder={0}
    ></iframe>
  );
};

export default AssistanceIframe;
