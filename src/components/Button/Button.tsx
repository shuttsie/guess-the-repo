import React, {FC, memo} from 'react';
import styled from 'styled-components/native';

interface WrapperProps {
  marginBottom?: boolean;
}

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  border-radius: 20px;
  background-color: rgb(80, 77, 210);
  padding: 10px 20px;
  ${(p: WrapperProps) => p.marginBottom && 'margin-bottom: 20px'}
`;

const Label = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

interface ButtonProps {
  label: string;
  marginBottom?: boolean;
  onPress: () => void;
}

export const Button: FC<ButtonProps> = memo(
  ({marginBottom, label, onPress}) => (
    <Wrapper onPress={onPress} marginBottom={marginBottom}>
      <Label>{label}</Label>
    </Wrapper>
  ),
);
