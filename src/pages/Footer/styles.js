import styled from "styled-components";

export const Section = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: space-between;
    flex-direction: row;
	min-height: 100%;
    height: 100%;
    width: 100%;
    padding: 40px 0;

    .wrapperImgIcons{
        display: flex;
    	align-items: flex-start;
	    justify-content: flex-start;
        flex-direction: column;   
    }

    .socialMedia{
        display: flex;
    	align-items: flex-start;
	    justify-content: flex-start;
        flex-direction: row;   
        margin-top: 10px;

        a{
            svg{
                width: 28px;
                height: 28px;
                color: #fff;
                margin-right: 8px;
            }

            &:hover{
                svg{
                    color: ${(props) => props.theme.colors.brand};
                    cursor: pointer;
                }
            }
        }
    }
`;

export const FooterInfo = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;
    flex-direction: row;    
    width: 100%;
    padding: 20px 0;

    a{
        color: #fff;
        text-decoration: none;

        &:hover{
            color: ${(props) => props.theme.colors.brand};
        }
    }
`;

export const Divider = styled.div`  
    width: 100%;   
    border-top: 1px solid #fff;
`;

export const Logo = styled.img`
  width: 190px; 
  height: 60px; 
  /* object-fit: contain;  */
  /* object-fit: cover;  */ 
`;
