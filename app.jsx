function App() {
  return (
    <div>
      <SaudacaoUsuario nome="Otávio" />
      <SaudacaoUsuario nome="Turma 10" />

      <Wrapper><ProfileCard 
        nome="Maria Silva" 
        imagemUrl="https://via.placeholder.com/100" 
        descricao="Desenvolvedora Front-end apaixonada por React." 
      /></Wrapper>

      <ProfileCard 
        nome="Otavio" 
        imagemUrl="https://via.placeholder.com/100" 
        descricao="Desenvolvedor Front-end apaixonado por React." 
      />

       <Wrapper>
        <p>Texto simples dentro do wrapper.</p>
      </Wrapper>
      
    </div>
  );
}
