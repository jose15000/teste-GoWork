import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Modal } from "antd";
import api from "../../api/axios";
import "./styles.css";
import { GlobalStyles } from "../../themes/globalStyles";

const { Meta } = Card;

const Questionario: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const id = Math.floor(Math.random() * 898) + 1;
      const response = await api.get(`pokemon/${id}`);
      setPokemon(response.data);
      setupAnswerOptions(response.data.types);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    }
  };

  const setupAnswerOptions = (types: any[]) => {
    const allTypes = ["fire", "water", "grass", "electric"];
    const correctAnswer = types[0].type.name;

    if (!allTypes.includes(correctAnswer)) {
      allTypes.pop();
      allTypes.push(correctAnswer);
    }

    const randomizedTypes = shuffleArray(allTypes);
    setAnswerOptions(randomizedTypes);
  };

  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleAnswer = (type: string) => {
    if (pokemon && pokemon.types.some((t: any) => t.type.name === type)) {
      setScore(score + 1);
    }
    if (question < 2) {
      setQuestion(question + 1);
      fetchPokemon();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setScore(0);
    setQuestion(0);
    fetchPokemon();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="questionario-container">
      <GlobalStyles/>
      {pokemon && (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={pokemon.name}
              src={pokemon.sprites.other["official-artwork"].front_default}
            />
          }
        >
          <Meta
            title={`#${pokemon.id} ${pokemon.name.toUpperCase()}`}
            description="Adivinhe o tipo"
          />
          <Row gutter={[8, 8]} style={{ marginTop: 16 }}>
            {answerOptions.map((type, index) => (
              <Col key={index} span={12}>
                <Button onClick={() => handleAnswer(type)}>{type}</Button>
              </Col>
            ))}
          </Row>
        </Card>
      )}

      <p className="Question">{`Pergunta: ${question + 1}/3`}</p>
      <Modal
        title="Fim do Jogo"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="playAgain" onClick={handleOk}>
            Jogar Novamente
          </Button>,
          <Button key="cancel" onClick={handleCancel}>
            Fechar
          </Button>,
        ]}
      >
        <p>Sua pontuação: {score}</p>
        <p>Deseja jogar novamente?</p>
      </Modal>
    </div>
  );
};

export default Questionario;
