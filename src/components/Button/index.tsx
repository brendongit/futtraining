import { Container } from "./styles";
import { Text } from "../Text"; 

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled, ...rest }: ButtonProps) {
  return (

  <Container {...rest} onPress={onPress} disabled={disabled}>
    <Text weight="500" color="#fff">
      {children}
    </Text>
  </Container>
  )
}