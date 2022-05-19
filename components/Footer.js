import React from "react";
import styles from "@/styles/Footer.module.css";
import { fixControlledValue } from "antd/lib/input/Input";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
export function Footer() {
    
    return (<footer >

                    
                <Copyright/>
           
            </footer>
    )
}
function Copyright() { 
    return (
        <Typography variant="body2" color="text.secondary" align="center">
        {'Clozet App © '}
      <Link color="inherit" href="https://github.com/yunseopkim2/">
        My github
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
        </Typography>
    )
}