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
	margin: 0 auto 50px;
	background: ${({ theme }) => theme.container};
	border-radius: 20px;
  }

  .main-title{
	
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
  top: 2px;
  width: 25px;
  height: 25px;
}

.user-name{
  color: ${({ theme }) => theme.textColor};
  font-size: 35px;
}

.user-about h4{
  font-size: 18px;
  font-weight: 500;
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

.repos-list{
  display: flex;
  flex-wrap: wrap;
  column-gap: 5%;
}

.repo{
  flex: 0 1 30%;
  border: 1px solid #1688f0;
  border-radius: 10px;
  margin-bottom: 30px;
  background: ${({ theme }) => theme.container};
  padding: 5px 20px 10px;
  min-height: 127px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
}

.repo-name{
  color: ${({ theme }) => theme.textColor};
  margin: 0px 0px 5px 0px;
}

.repo-desc{
  flex: 1 1 auto;
  margin: 0px 0px 10px 0px;
}

.repo-lang{
  margin: 10px 0px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.textColor};
}

.repo-view{
  display: flex;
  justify-content: space-between;
  margin: 10px 0px 0px 0px;
}

.repo-view-btn{
  border: 1px solid #1688f0;
  align-self: center;
   color: ${({ theme }) => theme.secondaryTextColor};
  padding: 9px 15px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: ${({ theme }) => theme.body}; 
  transition: all 0.3s linear;
  box-shadow: 0 0px 5px #1688f0, 0 0px 6px #1688f0;
}
.repo-code:hover{
  background: #1688f0;
  color: #fafafa;
}

.searchbar{
  max-width: 50%;
  margin: 0 auto 40px;
}

.searchbar input {
  padding: 15px 10px;
  font-size: 16px;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.container};
  border: 2px solid #1688f0;
  color: ${({ theme }) => theme.secondaryTextColor};
  outline: none;
}

.searchbar input::placeholder {
 color: ${({ theme }) => theme.secondaryTextColor};
 opacity: 0.6;
}

@media screen and (max-width: 1250px) {
  .container{
    max-width: 760px;
  }
  .header{
    max-width: 760px;
  }
  .user-info{
    padding: 10px 20px;
    gap: 5%;
  }
  .repos{
    padding: 20px
  }
}

@media screen and (max-width: 768px) {
  .container {
    margin: 0 10px 30px;
  }

  .header{
    margin: 30px 10px;

  }

  .user-info{
    padding: 10px 20px;
    flex-direction: column;
    align-items: center;
  }
  .repos-list{
    gap: 5%;
  }
  .repo{
    flex: 0 1 47.5%;
  }
  .theme-changer{
    flex-direction: column;
    gap: 5px;
  }
}


 `;
