import { createGlobalStyle } from "styled-components";
import info from "../assets/info.png";
import git from "../assets/git.png";
import location from "../assets/placeholder.png";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li{
    list-style: none;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.secondaryTextColor};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto'
  }
  
  .container{
	max-width: 1200px;
	margin: 0 auto;
	background: ${({ theme }) => theme.container};
	border-radius: 20px;
  }

  .main-title{
	text-align: center;
	color: ${({ theme }) => theme.textColor}
  }
 
 .header{
	display: flex;
	max-width: 1200px;
	margin: 30px auto;
	align-items: center;
  justify-content: space-between;
  
 }

 .theme-changer{
  display: flex;
  align-items: center;
  gap: 20px;
}

.user-info{
  display: flex;
  gap: 15%;
  line-height: 1.5;
  padding: 35px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.user-photo{
  border-radius: 50%;
  max-width: 300px;
  max-height: 300px;
  box-shadow: 0 0px 20px #1688f0, 0 0px 6px #1688f0;
}
.user-photo img{
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-about{
  letter-spacing: 2px;
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 18px;
}
.user-about h3{
  position: relative;
  margin: 0px 0px 10px 0px;
  padding: 0px 0px 10px 35px;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryTextColor};
}

.user-about h3::before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
}

.user-name{
  color: ${({ theme }) => theme.textColor};
  font-size: 35px;
}

.user-about h4{
  font-size: 20px;
  margin: 0px 0px 20px 0px;
}

.user-bio::before{
  background: url(${info}) 0 0 / cover no-repeat;
}

.user-location::before{
  background: url(${location}) 0 0 / cover no-repeat;
}

.user-repo-num::before{
  background: url(${git}) 0 0 / cover no-repeat;
}

.repos{
  padding: 35px;
  background: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.secondaryTextColor};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
 `;
