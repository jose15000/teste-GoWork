import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "antd";
import api from "../api/axios";

const { Meta } = Card;

const Questionario: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>(null);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(1);
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);

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
    const allTypes = ['fire', 'water', 'grass', 'electric'];
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
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswer = (type: string) => {
    if (pokemon && pokemon.types.some((t: any) => t.type.name === type)) {
      setScore(score + 1);
    }
    setQuestion(question + 1);
    if (question < 2) {
      fetchPokemon();
    } else {
      setQuestion(0);
    }
  };

  return (
    <div className="questionario-container">
      {pokemon && (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={pokemon.name} src={pokemon.sprites.other["official-artwork"].front_default} />}
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
      <p>{`Score: ${score}`}</p>
      <p>{`Pergunta: ${question}/3`}</p>

    </div>
  );
};

export default Questionario;
