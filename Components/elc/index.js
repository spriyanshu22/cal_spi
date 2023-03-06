import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { ButtonComp } from '../Home/styled'
import { Main } from './styled'
import { useContext } from 'react'
import { SpiContext } from '@/provider/SpiProvider'

const index = () => {
  const { sem1Spi, setSem1Spi } = useContext(SpiContext)
  const router = useRouter()
  const { branch } = router.query
  const [state, setState] = React.useState({
    firstSubject: '',
    secondSubject: '',
    thirdSubject: '',
    fourthSubject: '',
    fifthSubject: '',
    sixthSubject: '',
    seventhSubject: '',
    eightSubject: '',
  })
  const [count, setCount] = useState(0)

  const handleCalSpi = () => {
    const spi = count / 52
    setSem1Spi(spi)
  }
  console.log(router.asPath, router.pathname, 'routers')
  const handleRedirect1 = () => {
    console.log(router.asPath, router.pathname, 'routers')
    if (router.asPath === `sem1/${branch}/elc`) {
      router.push(`sem2/${branch}/esc`)
    } else if (router.asPath == `sem2/${branch}/elc`) {
      router.push(`sem1/${branch}/esc`)
    } else {
      router.push(`sem1/${branch}/esc`)
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
          <h1>CHM112</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">CHM112</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.firstSubject}
              name="firstSubject"
              onChange={e => handleChange(e, 4)}
              label="CHM112">
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
          <h1>CHM113</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">CHM113</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.secondSubject}
              name="secondSubject"
              onChange={e => handleChange(e, 4)}
              label="CHM113">
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
          <h1>ELC</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">ELC</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.thirdSubject}
              name="thirdSubject"
              onChange={e => handleChange(e, 9)}
              label="ELC">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B</MenuItem>
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
              <MenuItem value="B+">B</MenuItem>
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
              <MenuItem value="B+">B</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>
        <Main>
          <h1>PHY111</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">PHY111</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.sixthSubject}
              name="sixthSubject"
              onChange={e => handleChange(e, 3)}
              label="PHY111">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B</MenuItem>
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
              <MenuItem value="B+">B</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C+">C+</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D+">D+</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </Main>
        <Main>
          <h1>TA111</h1>
          <FormControl sx={{ backgroundColor: 'white', width: '200px' }} fullWidth>
            <InputLabel id="demo-simple-select-label">TA111</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.eightSubject}
              name="eightSubject"
              onChange={e => handleChange(e, 9)}
              label="TA111">
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B+">B</MenuItem>
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
        {/* <ButtonComp onClick={handleRedirect1}>Click here</ButtonComp> */}

        <h1>{sem1Spi}</h1>
      </form>
    </div>
  )
}

export default index
