import styled from "styled-components";

export const Main = styled.main`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;
	min-height: 100%;
    height: 100%;
    width: 100%;
	position: relative;
    
`;

export const BackgroundSection = styled.div`
    display: flex;
	align-items: center;
	justify-content: flex-start;
    flex-direction: column;
	min-height: 100%;   
    height: 100vh;
    width: 100%;
	position: relative;
    border-top: 6px solid ${(props) => props.theme.colors.brand};

    background: ${(props) => props.theme.colors.secondBrand};
    background: radial-gradient(circle, rgba(31,71,133,0.9) 0%, rgba(7,28,61,1) 100%), url('/img/background-home.jpg');
    
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
	align-items: center;
    padding: 14px 0;
    width: 100%;
   
`;

export const Navbar = styled.nav`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: row;

    ul{
        list-style-type: none; 
        display: flex; 
        padding: 0;
        margin: 0;

        li{
            font-weight: 700;

            a{
                text-decoration: none; 
                color: #fff; 
                padding: 10px; 

                &:hover {
                    color: ${(props) => props.theme.colors.brand}; 
                }
            }
        }
    }
`;

export const Logo = styled.img`
  width: 190px; 
  height: 60px; 
  /* object-fit: contain;  */
  /* object-fit: cover;  */ 
`;

