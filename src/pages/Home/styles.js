import styled from "styled-components";

export const Main = styled.main`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;
	min-height: 100%;
    height: calc(100vh - 5px);
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

    @media (max-width: 769px) {
        display: none;
    }
   
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

export const WrapperRowContent = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: row;
    //border: 2px solid aquamarine;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    overflow: hidden;

     @media (max-width: 1000px) {
       flex-direction: column;
       align-items: center;
	   justify-content: center;
     }
`;

export const CTAContent = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: center;
    flex-direction: column;   
    height: 100%;
    flex: .4;
   
     h1{
        color: #fff;
        font-weight: 900;        
        font-size: 34px;
        letter-spacing: 1.5px;

        strong{
            color: transparent; 
            font-weight: 900;
            color: ${(props) => props.theme.colors.brand};
            /* -webkit-text-stroke: 1px ${(props) => props.theme.colors.brand}; */
        }
    }

    p{
        color: #DFDFDF;
        margin-bottom: 40px;
        margin-top: 20px;
        letter-spacing: 1.5px;
    }

    a{
        text-align: center;
        font-weight: 700;
        text-decoration: none;
        padding: 16px 80px;
        border-radius: 4px;
        color: #fff;       
        background-color: ${(props) => props.theme.colors.brand};
        background: linear-gradient(75deg, rgba(131,50,9,1) 0%, rgba(236,89,14,1) 55%, rgba(250,119,53,1) 100%)       
    }

      @media (max-width: 1000px) {
        flex: 1;
        align-items: center;
        justify-content: flex-start;
        padding: 0 20px;

         h1{
            font-size: 24px;
            text-align: center;
         }

          p{
            font-size: 14px;
            text-align: center;
        }

        a{
            padding: 16px 40px;
            font-size: 14px;
        }

     }


    @media (max-width: ${(props) => props.theme.breakpoints.md}) {

        flex: .6;        

        h1{
            font-size: 28px;
            text-align: left;
        }

        p{
            font-size: 16px;
        }

    }

       @media (max-width: ${(props) => props.theme.breakpoints.sm}) {

        h1{
            text-align: center;
            font-size: 20px;
        }

        p{
            text-align: center;
            font-size: 14px;
        }

        a{
            width: 100%;
        }

    }


   
`;

export const ImgContent = styled.div`    
    display: flex;
	align-items: center;
	justify-content: center;
    flex-direction: column;
    flex: .6;
    height: 100%;
    position: relative;   
   

    @media (max-width: 1000px) {
        order: -1;
    }
`;

export const ImageManager = styled.img`
  max-width: 600px; 
  max-height: 600px; 
  width: 100%; 
  height: 100%; 
  object-fit: fill; 

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 500px; 
    max-height: 500px; 
  }

   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 400px; 
    max-height: 400px; 
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: 300px; 
    max-height: 300px; 
  }
`;





