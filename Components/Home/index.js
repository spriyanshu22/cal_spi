import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { RouteLink } from '../Navbar/styled'
import { BranchWrapper, ButtonComp } from './styled'
import { useContext } from 'react'
import { SpiContext } from '@/provider/SpiProvider'
import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter()
  const [branch, setBranch] = useState('')
  const [sem, setSem] = useState('')
  const { spi, setSpi } = useContext(SpiContext)
  const handleChange = event => {
    setBranch(event.target.value)
    console.log(branch)
  }
  const handleChanged = event => {
    setSem(event.target.value)
    console.log(sem)
  }
  const handleRedirect = () => {
    router.push(`/sem${sem}/${branch}`)
  }
  useEffect(() => {
    setSpi([...spi, { branch: branch, sem: sem }])
  }, [branch, sem])

  return (
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'start', flexDirection: 'column', gap: '30px' }}>
      <BranchWrapper>
        {/* <h1>{spi}</h1> */}
        <RouteLink>Branch</RouteLink>
        <Box sx={{ backgroundColor: 'white', width: '150px' }}>
          <FormControl sx={{ backgroundColor: 'white' }} fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={branch}
              label="Branch"
              onChange={handleChange}>
              <MenuItem value="Aerospace Engineering">Aerospace Engineering</MenuItem>
              <MenuItem value="Biological Science and Bioengineering">Biological Science and Bioengineering</MenuItem>
              <MenuItem value="Chemical Engineering">Chemical Engineering</MenuItem>
              <MenuItem value="Civil Engineering">Civil Engineering</MenuItem>
              <MenuItem value="Computer Science and Engineering">Computer Science and Engineering</MenuItem>
              <MenuItem value="Electrical Engineering">Electrical Engineering</MenuItem>
              <MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
              <MenuItem value="Materials Science and Engineering">Materials Science and Engineering</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </BranchWrapper>
      <BranchWrapper>
        {/* <h1>{spi}</h1> */}
        <RouteLink>Sem</RouteLink>
        <Box sx={{ backgroundColor: 'white', width: '150px' }}>
          <FormControl sx={{ backgroundColor: 'white' }} fullWidth>
            <InputLabel id="demo-simple-select-label">Sem</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sem}
              label="Sem"
              onChange={handleChanged}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </BranchWrapper>
      <ButtonComp onClick={handleRedirect}>Submit</ButtonComp>
    </div>
  )
}

export default index
