
import styled from 'styled-components';
import theme from '../../theme';


export const Dropdown = styled.div`
    position: relative;
`;
export const DropdownToggle = styled.button`
  background: transparent;
  border: 1px solid #eeeeee;
  color: #626262;
  padding: 4px 7px;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: ${theme.color.primary};
    color: ${theme.color.white};
    border-color: ${theme.color.primary};
   
  }
`;
export const DropdownMenu = styled.div`
  margin-top: 0;
  display: block;
  opacity: 1;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
    visibility: hidden;
  float: left;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: ${theme.color.white};
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: .25rem;
  ${Dropdown}:hover &{
    visibility: visible;
  }
  
`;
export const DropdownItem = styled.a`
  display: block;
  width: 100%;
  padding: .25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0; 
  &:hover {
    color: #16181b;
    text-decoration: none;
    background-color: ${theme.color.light};
  }
  &:active {
    color: #fff;
    text-decoration: none;
    background-color: ${theme.color.primary};
  }
  &:disabled{
    color: #6c757d;
    background-color: transparent; 
  }
`;
