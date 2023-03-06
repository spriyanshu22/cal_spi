import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Main } from '../elc/styled'
import { ButtonComp } from '../Home/styled'
import { useContext } from 'react'
import { SpiContext } from '@/provider/SpiProvider'

const index = () => {
  const { sem1Spi, setSem1Spi } = useContext(SpiContext)
  const [state, setState] = React.useState({
    firstSubject: '',
    secondSubject: '',
    thirdSubject: '',
    fourthSubject: '',
    fifthSubject: '',
    sixthSubject: '',
    seventhSubject: '',
  })
  const router = useRouter()
  const { branch } = router.query
  const [count, setCount] = useState(0)

  const handleCalSpi = () => {
    const spi = count / 46
    setSem1Spi(spi)
  }
  const handleRedirect = () => {
    if (router.asPath === `/sem1/${branch}/elc`) {
      router.push(`/sem2/${branch}/esc`)
    } else {
      router.push(`/sem2/${branch}/elc`)
    }
  }
  var cnt
  useEffect(() => {
    const timeOutId = setTimeout(() => setCount(count), 2000)
    return () => clearTimeout(timeOutId)
  }, [count])
  function handleChange(evt, num) {
    const value = evt.target.value
    if (value == 'A') {
      setCount(count + 10 * num)
      cnt += 10 * num
    } else if (value == 'A+') {
      setCount(count + 10 * num)
    } else if (value == 'B+') {
      setCount(count + 9 * num)
    } else if (value == 'B') {
      setCount(count + 8 * num)
    } else if (value == 'C+') {
      setCount(count + 7 * num)
    } else if (value == 'C') {
      setCount(count + 6 * num)
    } else if (value == 'D+') {
      setCount(count + 5 * num)
    } else if (value == 'D') {
      setCount(count + 4 * num)
    } else if (value == 'E') {
      setCount(count + 0 * num)
    } else {
      setCount(count + 0 * num)
    }
    setState({
      ...state,
      [evt.target.name]: value,
    })
    console.log(value, 'value', count, state, 'cnt', cnt)
  }
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginLeft: '20px' }}>
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
          gap: '20px',
        }}>
        <Main>
          <h1>ESC111</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">ESC111</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.firstSubject}
              name="firstSubject"
              onChange={e => handleChange(e, 7)}
              label="ESC111">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>
        <Main>
          <h1>ESC112</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">ESC112</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.secondSubject}
              name="secondSubject"
              onChange={e => handleChange(e, 7)}
              label="ESC112">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>
        <Main>
          <h1>LIF</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">LIF</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.thirdSubject}
              name="thirdSubject"
              onChange={e => handleChange(e, 6)}
              label="LIF">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>
        <Main>
          <h1>MTH111</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">MTH111</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.fourthSubject}
              name="fourthSubject"
              onChange={e => handleChange(e, 6)}
              label="MTH111">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>
        <Main>
          <h1>MTH112</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">MTH112</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.fifthSubject}
              name="fifthSubject"
              onChange={e => handleChange(e, 6)}
              label="MTH112">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>
        <Main>
          <h1>CHM111</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">CHM111</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.sixthSubject}
              name="sixthSubject"
              onChange={e => handleChange(e, 3)}
              label="CHM111">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>
        <Main>
          <h1>PHY</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">PHY</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.seventhSubject}
              name="seventhSubject"
              onChange={e => handleChange(e, 11)}
              label="PHY">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>

        <ButtonComp onClick={handleCalSpi}>Calculate SPI</ButtonComp>
        <h1 style={{ color: 'green' }}>for CPI ,Enter Sem1 grades</h1>
        {/* <ButtonComp onClick={handleRedirect}>Click here</ButtonComp> */}

        <h1>{sem1Spi}</h1>
      </form>
    </div>
  )
}

export default index
