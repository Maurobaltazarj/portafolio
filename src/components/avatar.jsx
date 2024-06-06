import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function MediaControlCard() {
    return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
            <h4>Hola soy Jara Mauro</h4>
            <h1>Desarrollador Full Stack</h1>
            <Button variant='contained'>Descargar CV</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <Avatar
                variant="circular"
                sx={{
                width: 200,
                height: 200,
                }}
            >
                jb
            </Avatar>
        </Box>
    </Card>
    );
}
