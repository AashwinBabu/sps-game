import { Typography,Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { Button } from "@mui/material";
import "./Intro.css";


function LandingPage() {
const [showIntro, setShowIntro] = useState(true);
    const [random,setRandom]=useState(["rock","paper","scissors"]) 
    const [result,setResult]=useState()
    const [draw,setDraw]=useState()
    const [you,setYou] =useState(0)
    const [computer,setComputer]=useState(0) 
    const [active,setActive]=useState(true)  
    const [user,setUser]=useState()  
    const [username,setUsername]=useState()
    const [computerChoice,setComputerChoice]=useState() 
    const [computername,setComputername]=useState()
    const [userlevel,setUserLevel]=useState(0) 
    const [computerlevel,setComputerlevel]=useState(0) 
    const [lev,setLev]=useState() 


    const clicked=(choice)=>{ 
        if (choice==="scissors") {
            setUser("✌️")
            setUsername("scissors")
        }
        else if (choice=="rock") {
            setUser("✊")
            setUsername("rock")
        }
        else{
            setUser("✋")
            setUsername("paper")
        }


        if (!active) {
  return;
}

        setDraw("") 
        
        
        console.log(choice);
        
        const index = Math.floor(Math.random()*random.length) 
        const computerChoice = random[index]
         if (computerChoice==="scissors") {
            setComputerChoice("✌️")
            setComputername("scissors")
        }
        else if (computerChoice=="rock") {
            setComputerChoice("✊")
            setComputername("rock")
        }
        else{
            setComputerChoice("✋")
            setComputername("paper")
        }

        console.log(computerChoice);


        if (active) {
                   if (choice === computerChoice) {
  setDraw("It's a Draw");
} else if (
  (choice === "rock" && computerChoice === "scissors") ||
  (choice === "paper" && computerChoice === "rock") ||
  (choice === "scissors" && computerChoice === "paper") 
) {
    const score = you + 1
  setYou(score);
  if (score === 3) {
  setResult("You Win the Game");
  setActive(false);
  const userlev = userlevel + 1
  setUserLevel(userlev) 
  console.log(userlev); 

  if (userlev===3) {
    setResult("🏆 Congratulations! All 3 Levels Completed!");
  }
  else if (userlev==1) {
    setLev("Level 1 Completed")
  }
  else{
    setLev("Leval 2 Completed")
  }
  
}
} else {
    const score = computer + 1
setComputer(score)  
if (score === 3) {
  setResult("Computer Win the Game");
  setActive(false);
  
} 
}
        }

        
    }

     const reset=()=>{
           setYou(0)
           setComputer(0)
           setResult("")
           setDraw("")
           setActive(true) 
           setComputerChoice("")
           setUser("") 
           setComputername("")
           setUsername("") 

           if (userlevel===3) {
            setUserLevel(0) 
           }
        }
  return (
   <Box
  sx={{
  minHeight: "100vh",
  minHeight: "100dvh",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "#111110",
  color: "#F4EFE5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: { xs: 2, sm: 3, md: 2 },
  overflowX: "hidden",
}}
>

  

{showIntro && (
  <Box className="arcade-intro">
    <Box className="arcade-content">

      <Typography className="arcade-kicker">
        THE ULTIMATE ARCADE CHALLENGE
      </Typography>

      <Typography className="arcade-title">
        ROCK <span className="neon-cyan">PAPER</span>
        <br />
        <span className="neon-purple">SCISSORS</span>
      </Typography>

      <Typography className="arcade-subtitle">
        CHOOSE YOUR MOVE. BEAT THE MACHINE.
      </Typography>

      <Box className="arcade-hands">
        <Box className="arcade-hand">
          <span className="arcade-emoji">✊</span>
          <span className="arcade-label">ROCK</span>
        </Box>

        <Box className="arcade-hand">
          <span className="arcade-emoji">✋</span>
          <span className="arcade-label">PAPER</span>
        </Box>

        <Box className="arcade-hand">
          <span className="arcade-emoji">✌️</span>
          <span className="arcade-label">SCISSORS</span>
        </Box>
      </Box>

      <Box className="arcade-how-to-play">

        <Typography className="arcade-how-title">
          HOW TO PLAY
        </Typography>

        <Box className="arcade-rule">
          <Typography className="arcade-rule-number">
            01
          </Typography>

          <Box>
            <Typography className="arcade-rule-heading">
              Choose Your Move
            </Typography>

            <Typography className="arcade-rule-text">
              Pick Rock, Paper, or Scissors.
            </Typography>
          </Box>
        </Box>

        <Box className="arcade-rule">
          <Typography className="arcade-rule-number">
            02
          </Typography>

          <Box>
            <Typography className="arcade-rule-heading">
              Beat the Computer
            </Typography>

            <Typography className="arcade-rule-text">
              Rock beats Scissors. Paper beats Rock.
              Scissors beats Paper.
            </Typography>
          </Box>
        </Box>

        <Box className="arcade-rule">
          <Typography className="arcade-rule-number">
            03
          </Typography>

          <Box>
            <Typography className="arcade-rule-heading">
              Win the Round
            </Typography>

            <Typography className="arcade-rule-text">
              Matching moves are a draw.
              Winning rounds increase your score.
            </Typography>
          </Box>
        </Box>

      </Box>

      <Button
        className="arcade-start"
        onClick={() => setShowIntro(false)}
      >
        START GAME&nbsp; →
      </Button>

    </Box>
  </Box>
)}



  <Box
  sx={{
    width: "100%",
    textAlign: "center",
    mb: 1.5,
  }}
>
  <Typography
    sx={{
      color: "#C7AD7B",
      fontSize: { xs: "10px", sm: "12px" },
      letterSpacing: "3px",
      mb: 0.5,
    }}
  >
    THE DUEL · NO. 001
  </Typography>

  <Typography
    sx={{
      color: "#F4EFE5",
      fontSize: { xs: "26px", sm: "36px", md: "44px" },
      fontWeight: 600,
      letterSpacing: { xs: "1px", sm: "3px" },
      lineHeight: 1.2,
    }}
  >
    THE ART OF THE DUEL
  </Typography>

  <Typography
    sx={{
      color: "#A59A87",
      fontSize: { xs: "10px", sm: "12px" },
      letterSpacing: "3px",
      mt: 0.5,
    }}
  >
    ROCK · PAPER · SCISSORS
  </Typography>

  {/* Decorative line */}
  <Box
    sx={{
      width: { xs: "60px", sm: "90px" },
      height: "1px",
      bgcolor: "#796747",
      mx: "auto",
      mt: 1.5,
    }}
  />
</Box>
   <Box
  sx={{
    display: "flex",
    gap: { xs: 1.5, sm: 3 },
    width: "100%",
    maxWidth: "700px",
    justifyContent: "center",
   mb: 1.5,
  }}
>
  <Paper
    elevation={0}
    sx={{
      backgroundColor: "#1D1C19",
      color: "#F4EFE5",
      border: "1px solid #796747",
      borderRadius: "12px",
      flex: 1,
      minWidth: 0,
      minHeight: { xs: "150px", sm: "170px" },
      padding: { xs: 2, sm: 2.5 },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
    }}
  >
    <Typography sx={{ color: "#C7AD7B", fontSize: { xs: "10px", sm: "12px" }, letterSpacing: "1px" }}>
      YOUR CHOICE
    </Typography>

    <Typography sx={{ fontSize: { xs: "38px", sm: "48px" } }}>
      {user || "❔"}
    </Typography>

    <Typography sx={{ fontWeight: 600, fontSize: { xs: "13px", sm: "16px" } }}>
      {username || "WAITING"}
    </Typography>

    <Typography sx={{ color: "#A59A87", fontSize: "11px", mt: 1 }}>
      YOUR SCORE
    </Typography>

    <Typography sx={{ color: "#C7AD7B", fontSize: "30px", fontWeight: 600 }}>
      {you.toString().padStart(2, "0")}
    </Typography>
  </Paper>

  <Paper
    elevation={0}
    sx={{
      backgroundColor: "#1D1C19",
      color: "#F4EFE5",
      border: "1px solid #796747",
      borderRadius: "12px",
      flex: 1,
      minWidth: 0,
      minHeight: { xs: "150px", sm: "170px" },
     padding: { xs: 2, sm: 2.5 },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
    }}
  >
    <Typography sx={{ color: "#C7AD7B", fontSize: { xs: "10px", sm: "12px" }, letterSpacing: "1px" }}>
      COMPUTER CHOICE
    </Typography>

    <Typography sx={{ fontSize: { xs: "38px", sm: "48px" } }}>
      {computerChoice || "❔"}
    </Typography>

    <Typography sx={{ fontWeight: 600, fontSize: { xs: "13px", sm: "16px" } }}>
      {computername || "WAITING"}
    </Typography>

    <Typography sx={{ color: "#A59A87", fontSize: "11px", mt: 1 }}>
      COMPUTER SCORE
    </Typography>

    <Typography sx={{ color: "#C7AD7B", fontSize: "30px", fontWeight: 600 }}>
      {computer.toString().padStart(2, "0")}
    </Typography>
  </Paper>
</Box>


<Box sx={{ width: "100%", maxWidth: "700px", mb: 1 }}>
 
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      mb: 0.5,
    }}
  >
    <Typography
      sx={{ fontSize: "10px", color: "#A59A87" }}
    >
      GAME PROGRESS
    </Typography>

    <Typography
      sx={{ fontSize: "10px", color: "#C7AD7B" }}
    >
      LEVEL {Math.min(userlevel + 1, 3)} OF 3
    </Typography>
  </Box>

  
  <Box
    sx={{
      height: "3px",
      backgroundColor: "#403B30",
      borderRadius: 2,
      overflow: "hidden", 
    }}
  >
   
    <Box
      sx={{
        height: "100%",
        width: `${Math.min((userlevel / 3) * 100, 100)}%`,
        backgroundColor: "#C7AD7B",
        borderRadius: 2,
        transition: "width 0.4s ease",
      }}
    />
  </Box>
</Box>


   <Box
  sx={{
    width: "100%",
    maxWidth: "700px",
    minHeight: { xs: "75px", sm: "85px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    my: 1,
  }}
>
  {!active ? (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "#211F1A",
        border: "1px solid #C7AD7B",
        borderRadius: "12px",
        padding: { xs: 2, sm: 2.5 },
        textAlign: "center",
        color: "#F4EFE5",
        animation: "resultReveal 0.5s ease-out",
        "@keyframes resultReveal": {
          from: {
            opacity: 0,
            transform: "translateY(10px) scale(0.97)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },
      }}
    >
      <Typography
        sx={{
          color: "#C7AD7B",
          fontSize: { xs: "10px", sm: "12px" },
          letterSpacing: "2px",
          mb: 0.5,
        }}
      >
        FINAL RESULT
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "24px" },
          fontWeight: 600,
        }}
      >
        {result}
      </Typography>
    </Paper>
  ) : (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        backgroundColor: "#1D1C19",
        border: "1px solid #50452F",
        borderRadius: "12px",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: draw ? "#C7AD7B" : "#A59A87",
          fontSize: { xs: "13px", sm: "15px" },
        }}
      >
        {draw || "YOUR NEXT MOVE AWAITS"}
      </Typography>
    </Paper>
  )}
</Box>
   


   


   <Box sx={{display:"flex",gap:2,marginTop:"16px"}}>
  <Paper
    onClick={() => active && clicked("rock")}
    elevation={8}
    sx={{
      flex: 1,
      minWidth: 0,
      minHeight: { xs: "80px", sm: "95px" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      backgroundColor: "#1D1C19",
      color: "#F4EFE5",
      border: "1px solid #796747",
      borderRadius: "12px",
      padding: { xs: "12px 4px", sm: "18px" },
      cursor: active ? "pointer" : "not-allowed",
      opacity: active ? 1 : 0.45,
      transition: "all 0.25s ease",
      "&:hover": active
        ? {
            backgroundColor: "#29261F",
            borderColor: "#C7AD7B",
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(199, 173, 123, 0.12)",
          }
        : {},
      "&:active": active ? { transform: "scale(0.97)" } : {},
    }}
  >
    <Typography sx={{ fontSize: { xs: "28px", sm: "36px" } }}>
      ✊
    </Typography>
    <Typography sx={{ fontSize: { xs: "11px", sm: "14px" }, textTransform: "uppercase", letterSpacing: "1px" }}>
      Rock
    </Typography>
  </Paper>

  <Paper
    onClick={() => active && clicked("paper")}
    elevation={8}
    sx={{
      flex: 1,
      minWidth: 0,
      minHeight: { xs: "80px", sm: "95px" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      backgroundColor: "#1D1C19",
      color: "#F4EFE5",
      border: "1px solid #796747",
      borderRadius: "12px",
      padding: { xs: "12px 4px", sm: "18px" },
      cursor: active ? "pointer" : "not-allowed",
      opacity: active ? 1 : 0.45,
      transition: "all 0.25s ease",
      "&:hover": active
        ? {
            backgroundColor: "#29261F",
            borderColor: "#C7AD7B",
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(199, 173, 123, 0.12)",
          }
        : {},
      "&:active": active ? { transform: "scale(0.97)" } : {},
    }}
  >
    <Typography sx={{ fontSize: { xs: "28px", sm: "36px" } }}>
      ✋
    </Typography>
    <Typography sx={{ fontSize: { xs: "11px", sm: "14px" }, textTransform: "uppercase", letterSpacing: "1px" }}>
      Paper
    </Typography>
  </Paper>

  <Paper
    onClick={() => active && clicked("scissors")}
    elevation={8}
    sx={{
      flex: 1,
      minWidth: 0,
      minHeight: { xs: "80px", sm: "95px" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
      backgroundColor: "#1D1C19",
      color: "#F4EFE5",
      border: "1px solid #796747",
      borderRadius: "12px",
      padding: { xs: "12px 4px", sm: "18px" },
      cursor: active ? "pointer" : "not-allowed",
      opacity: active ? 1 : 0.45,
      transition: "all 0.25s ease",
      "&:hover": active
        ? {
            backgroundColor: "#29261F",
            borderColor: "#C7AD7B",
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(199, 173, 123, 0.12)",
          }
        : {},
      "&:active": active ? { transform: "scale(0.97)" } : {},
    }}
  >
    <Typography sx={{ fontSize: { xs: "28px", sm: "36px" } }}>
      ✌️
    </Typography>
    <Typography sx={{ fontSize: { xs: "11px", sm: "14px" }, textTransform: "uppercase", letterSpacing: "1px" }}>
      Scissors
    </Typography>
  </Paper>
</Box>



   <Button
  onClick={reset}
  variant="contained"
  sx={{
    mt: 2,
    px: { xs: 3, sm: 4 },
    py: 1.2,
    borderRadius: "10px",
    backgroundColor: "#C7AD7B",
    color: "#111110",
    fontWeight: 700,
    fontSize: { xs: "11px", sm: "13px" },
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    boxShadow: "none",
    transition: "all 0.25s ease",

    "&:hover": {
      backgroundColor: "#D8C49A",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 20px rgba(199, 173, 123, 0.2)",
    },

    "&:active": {
      transform: "scale(0.97)",
    },
  }}
>
  {
  userlevel === 3
    ? "↻ Play Again"
    : computer >= 3
      ? "↻ Rematch"
      : "Next Match →"
}
</Button>
   </Box>
  );
}

export default LandingPage;
