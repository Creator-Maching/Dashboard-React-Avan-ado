export default function Home() {
  const penumbra = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  return (
  <>
    <p className="text-justify p-9 m-9" style={penumbra}>
      Bem-vindo ao nosso painel de monitoramento ambiental.
      Aqui você encontra informações atualizadas sobre pluviosidade,
      altura das ondas e temperatura, reunidas em um único lugar para
      facilitar a análise e a tomada de decisões.<br/>

      Nosso sistema integra dados confiáveis para oferecer uma visão
      clara e precisa das condições climáticas e oceânicas, permitindo
      que você acompanhe:<br/>

      Pluviosidade — volume de chuva registrado e intensidade ao longo 
      do tempo.<br/>

      Ondas — altura, variação e comportamento do mar.<br/>

      Temperatura — medições atuais e históricos de mudanças térmicas.<br/>

      Com uma interface intuitiva e visual, o painel foi desenvolvido para
      pesquisadores, estudantes, profissionais e entusiastas que buscam 
      explorar e compreender melhor o ambiente ao seu redor.<br/>

      Prepare-se para uma experiência completa de observação e análise,
      com dados organizados e apresentados de forma clara e acessível.
    </p>
  </>
);
}
