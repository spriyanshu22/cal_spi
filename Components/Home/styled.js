const { default: styled } = require('@emotion/styled')
import { Button } from '@mui/material'

export const BranchWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 40px;
  align-items: center;
  gap: 30px;
`
export const ButtonComp = styled(Button)`
  padding: 15px;
  border: 1px solid green;
  width: 120px;
  margin-left: 40px;
  &:hover {
    color: green;
  }
`
