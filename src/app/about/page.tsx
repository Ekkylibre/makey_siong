"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { colors, padding } from '../theme';

// Animation pour révéler le texte
const reveal = keyframes`
  0% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
`;

// Animation pour faire apparaître le texte en montant
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BackgroundContainer = styled.div`
  background-color: ${colors.tertiary};
  height: 100%;
  width: 100%;
  padding: ${padding.horizontalPadding};
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  padding-top: 100px;
  gap: 100px;
`;

const PhotoColumn = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25%;
  animation: ${slideUp} 1s ease forwards;
  color: white;
  position: relative;

  h1 {
    font-size: 5rem;
    margin-bottom: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transform: translateX(-60%);

    span {
      display: block;
      animation: ${reveal} 1.5s ease forwards;
    }
  }

  p {
    font-size: 1.2rem;
    animation: ${slideUp} 1s ease forwards;
  }
`;

export default function About() {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <PhotoColumn>
          <Image
            src="/profile.jpg"
            alt="Photo de profil"
            width={500}
            height={700}
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </PhotoColumn>
        <TextColumn>
          <h1>
            <span>MAKEY</span>
            <span>SIONG</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet magna a quam fermentum ultricies. Aenean faucibus, ligula non fringilla auctor, mi sapien convallis libero, nec dapibus arcu lorem sit amet sapien. Maecenas fringilla, enim ut hendrerit hendrerit, risus orci convallis eros, sit amet tincidunt mi purus nec risus. Nulla at risus suscipit, malesuada nisi vel, pellentesque justo. Aliquam erat volutpat. In hac habitasse platea dictumst. Suspendisse potenti. Proin nec ante vitae metus tincidunt rhoncus. Aliquam vehicula pharetra viverra. Pellentesque eu mauris vel lectus hendrerit elementum id nec lorem. Phasellus laoreet nisi et eros condimentum, a tincidunt sem rhoncus.

            Morbi vehicula sollicitudin massa, ut gravida justo. Sed efficitur lacus lacus, a finibus nisl luctus eget. Quisque tincidunt libero a metus dictum, a sollicitudin metus vehicula. Mauris non metus nisl. Donec auctor magna et ultricies aliquet. Fusce nec dignissim risus. Fusce sit amet lorem nunc. Aenean ac volutpat leo. Sed in tincidunt lacus, et posuere enim. Phasellus gravida enim lectus, at fringilla mauris fermentum non. Curabitur sollicitudin sollicitudin diam. Nam rutrum libero risus, ut interdum nulla ultrices vel. Mauris dictum, eros at auctor vulputate, ipsum tortor efficitur odio, in condimentum dui turpis id nunc. Aliquam dignissim erat eget sem lacinia, vel tempus nulla congue. Curabitur in dictum eros, sit amet laoreet felis.

            Sed nec tristique risus. Ut varius, magna vel interdum luctus, ex nulla rhoncus ex, et efficitur felis orci id justo. Suspendisse potenti. Nullam pellentesque bibendum scelerisque. Donec sagittis purus in purus vehicula, id fermentum quam mollis. Nam convallis turpis purus, ac vestibulum elit egestas vitae. Donec sit amet augue nec dolor bibendum laoreet a in libero. Etiam pretium rhoncus sollicitudin. Integer auctor nisi sed eros dignissim ultricies. Suspendisse potenti. In non fringilla ex, et tempor enim.

            Suspendisse potenti. Proin fermentum accumsan malesuada. Ut tempus lacinia libero. Nulla tincidunt egestas lectus, non rutrum tortor suscipit eu. In nec urna est. Vestibulum aliquam ligula et felis vehicula, sit amet dapibus orci volutpat. Nulla ut vehicula purus. Cras bibendum odio eget urna pharetra bibendum. Vestibulum sodales malesuada lorem, in vulputate lacus ultricies non. Donec sit amet tincidunt dui, sed facilisis nisi. Suspendisse faucibus dapibus nisi, ac accumsan sapien egestas sit amet. Nulla aliquet ligula vitae sapien fermentum, in posuere turpis ultricies. Nullam fermentum lacinia nisl a sollicitudin.

            Fusce non nulla sed metus scelerisque aliquet. Aliquam ultricies diam at libero facilisis, eget suscipit ipsum scelerisque. Nam id odio quis leo suscipit laoreet. Mauris consequat tortor id leo molestie congue. Cras pellentesque rhoncus augue, ac tempor risus consectetur at. Fusce vitae lacinia risus. Quisque ut ante dolor. Sed eget pharetra libero. Mauris nec arcu quam. Suspendisse scelerisque ligula sit amet nulla suscipit efficitur. Mauris fringilla augue velit, nec vulputate libero ultricies nec. Suspendisse id consequat est, vitae dictum lorem. Vestibulum lobortis urna arcu, vel suscipit tortor hendrerit sit amet. Mauris posuere, ex quis euismod dictum, felis dui fringilla tortor, a malesuada metus risus sit amet leo. Phasellus ut convallis ligula.
          </p>
          <Image
            src="/signature_blanc.png"
            alt="signature"
            width={400}
            height={300}
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </TextColumn>
      </ContentContainer>
    </BackgroundContainer>
  );
}
