import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import basic_python_png from '../../assets/Basic_Python.png';
import graphics_designing_png from '../../assets/Graphics_Designing.png';
import machine_learning_png from '../../assets/Machine_Learning.png';
import ai_real_world_png from '../../assets/AI_Real_World.png';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import ButtonBase from "@material-ui/core/ButtonBase";

const cardsImages2 = [
    {
        path: basic_python_png,
        title: "Basic Python",
        width: "20%",
        desc: "Learn basics to improve your Intelligence."
    },
    {
        path: graphics_designing_png,
        title: "Graphic Design",
        width: "20%",
        desc: "Design your Intelligence & make it visible."
    },
    {
        path: machine_learning_png,
        title: "Machine Learning",
        width: "20%",
        desc: "Increase your learning to predict the future."
    },
    {
        path: ai_real_world_png,
        title: "AI Real World",
        width: "20%",
        desc: "The Key of AI is to always solve problems."
    }
];


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(id, name, calories, fat, carbs, protein) {
    return { id, name, calories, fat, carbs, protein };
}


const rows = [
    createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(2, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData(3, 'Eclair', 262, 16.0, 24, 6.0),
    createData(4, 'Cupcake', 305, 3.7, 67, 4.3),
    createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
];

const projectsAll = [{
    project: {
        id: 1,
        name: 'project1',
        creation_date: '10/12/11',
        activities: 6,
        data: [{
            data_content: {
                id: 1,
                name: 'act1.1',
                creation_date: '11/12/11',
                last_modification: '12/12/11',
                type: 'ML'
            }
        }, {
            data_content: {
                id: 2,
                name: 'act1.2',
                creation_date: '13/12/11',
                last_modification: '15/12/11',
                type: 'BP'
            }
        }
        ]
    }
},
{
    project: {
        id: 2,
        name: 'project2',
        creation_date: '19/01/15',
        activities: 5,
        data: [{
            data_content: {
                id: 1,
                name: 'act2.1',
                creation_date: '11/01/12',
                last_modification: '12/01/12',
                type: 'GD'
            }
        }, {
            data_content: {
                id: 2,
                name: 'act2.2',
                creation_date: '13/01/12',
                last_modification: '15/01/12',
                type: 'ML'
            }
        }
        ]

    }
}
]

console.log("projectAll", projectsAll[1].project.data)

const useStyles = makeStyles(theme => ({
    dashboardTitle: {
        color: "black",
        [theme.breakpoints.down("md")]: {

        },
        [theme.breakpoints.down("xs")]: {

        }
    },
    card: {
        maxWidth: 345,
    },
    cardMedia: {
        height: 200,
    },
    searchInput: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            margin: '0'
        },

    },
    table: {
        minWidth: 700,
    },
    tableRow: {
        '&:hover': {
            background: "#138496",
        },

    },
    projectRedirectText: {
        '&:hover': {
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer"
        },

    },
    cardCreateBtn: {
        '&:hover': {
            color: "white",
            backgroundColor: "#138496"
        },

    },

    newCard: {
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%"
    },
    cardImage: {
        position: "relative",
        height: 200,
        [theme.breakpoints.down("xs")]: {
            width: "100% !important", // Overrides inline-style
            height: 100
        },
        "&:hover, &$focusVisibleCard": {
            zIndex: 1,
            "& $cardImageBackdrop": {
                opacity: 0.15
            },
            "& $cardImageMarked": {
                opacity: 0
            },
            "& $cardImageTitle": {
                border: "4px solid currentColor"
            },
            "& $cardImageTitle": {
                background: "#6ba6ce"
            }
        }
    },
    focusVisibleCard: {},
    cardImageButton: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    },
    cardImageSrc: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center 40%"
    },
    cardImageBackdrop: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "black",
        opacity: 0.4,
        transition: theme.transitions.create("opacity")
    },
    cardImageTitle: {
        position: "relative",
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6
            }px`
    },
    cardImageMarked: {
        height: 3,
        width: 18,
        backgroundColor: "white",
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity")
    }


}))

const cardTitles = ['Basic Python', 'Graphic', 'Machine Learning', 'AI Real World']
const cardDesc = [
    'Learn basics to improve your Intelligence.',
    'Design your Intelligence & make it visible.',
    'Increase your learning to predict the future.',
    'The Key of AI is to always solve problems.'
]

const cardImages = [basic_python_png, graphics_designing_png, machine_learning_png, ai_real_world_png]

const Dashboard = () => {

    const [cardHover, set_cardHover] = useState(false)
    const [cardHoverId, set_cardHoverId] = useState(null)

    const [projectExpend, set_projectExpend] = useState(false)
    const classes = useStyles()

    const [selectedProject, set_selectedProject] = useState(0)

    const projectToactivities = (index) => {
        set_projectExpend(true)
        set_selectedProject(index)
    }

    const tempFunc = (id) => {
        set_cardHover(true)
        set_cardHoverId(id)
    }

    const projects = (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">#</StyledTableCell>
                            <StyledTableCell align="right">Project Name</StyledTableCell>
                            <StyledTableCell align="right">Creation Time</StyledTableCell>
                            <StyledTableCell align="right">Activities</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {projectsAll.map((row, index) => (
                            <StyledTableRow
                                className={classes.tableRow}
                                key={row.id}
                            >
                                <StyledTableCell
                                    onClick={() => { projectToactivities(index) }}
                                    align="right">{row.project.id}
                                </StyledTableCell>
                                <StyledTableCell
                                    onClick={() => { projectToactivities(index) }}
                                    align="right">{row.project.name}
                                </StyledTableCell>
                                <StyledTableCell
                                    onClick={() => { projectToactivities(index) }}
                                    align="right">{row.project.creation_date}
                                </StyledTableCell>
                                <StyledTableCell
                                    onClick={() => { projectToactivities(index) }}
                                    align="right">{row.project.activities}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton onClick={() => { alert("delete") }} size="small" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </React.Fragment>
    )
    const projects_activities = (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">#</StyledTableCell>
                            <StyledTableCell align="right">Activity Name</StyledTableCell>
                            <StyledTableCell align="right">Creation Time</StyledTableCell>
                            <StyledTableCell align="right">Last Modified</StyledTableCell>
                            <StyledTableCell align="right">Type</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projectsAll[selectedProject].project.data.map((row) => (
                            <StyledTableRow
                                className={classes.tableRow}
                                key={row.id}
                                onClick={(e) => { console.log(row.id) }}
                            >
                                <StyledTableCell align="right">{row.data_content.id}</StyledTableCell>
                                <StyledTableCell align="right">{row.data_content.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.data_content.creation_date}</StyledTableCell>
                                <StyledTableCell align="right">{row.data_content.last_modification}</StyledTableCell>
                                <StyledTableCell align="right">{row.data_content.type}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton onClick={() => { alert("delete") }} size="small" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )

    return (
        <div>
            <Typography align="center" variant="h2" className={classes.dashboardTitle}>
                Artificial Intelligence
            </Typography>
            <Typography align="center" variant="subtitle1" className={classes.dashboardTitle}>
                Let’s explore the world of Artificial Intelligence & Machine Learning
            </Typography>
            
            <div className={classes.newCard} style={{justifyContent: "center"}}>
                {cardsImages2.map((image, i) => (
                    <ButtonBase
                        onMouseEnter={() => { tempFunc(i) }}
                        onMouseLeave={() => { set_cardHover(false) }}
                        focusRipple
                        key={image.title}
                        className={classes.cardImage}
                        focusVisibleClassName={classes.focusVisibleCard}
                        style={{
                            width: image.width,
                            margin: "20px"
                        }}
                    >
                        <span
                            className={classes.cardImageSrc}
                            style={{
                                backgroundImage: `url(${image.path})`
                            }}
                        />
                        <span className={classes.cardImageBackdrop} />
                        <span className={classes.cardImageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.cardImageTitle}
                            >
                                {/* {image.title} */}
                                {(cardHover && cardHoverId == i) ? 'Create > >' : image.title}
                                <span className={classes.cardImageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>


            <Typography
                align="center"
                variant="h2"
                className={classes.dashboardTitle}
            >
                Projects
            </Typography>

            <Grid container
                spacing={3}
                // direction="column"
                alignItems="center"
                justify="center"
                // style={{ minHeight: '100vh' }}
                style={{ marginTop: '5vh', marginBottom: '5vh' }}
            >
                <Grid item
                    // style={{ 'margin': "10px 50px" }}
                    style={{ maxWidth: '40vh' }}
                // xs={12} sm={6} md={4}
                >
                    <TextField
                        // style={{'height': '1ch'}}
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
                <Grid item
                    // style={{ 'margin': "10px 50px" }}
                    style={{ maxWidth: '40vh' }}
                // xs={12} sm={6} md={4}
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        size="medium"
                    // onClick={() => { alert('clicked') }}
                    >
                        clear
                    </Button>
                </Grid>
                <Grid item
                    // style={{ 'margin': "10px 50px" }}
                    style={{ maxWidth: '40vh' }}
                // xs={12} sm={6} md={4}
                >
                    <Button variant="contained" color="primary"
                        size="medium">
                        Create Project
                    </Button>
                </Grid>
                <Grid item
                    // style={{ 'margin': "10px 50px" }}
                    style={{ maxWidth: '40vh' }}
                // xs={12} sm={6} md={4}
                >
                    <Button variant="contained" color="primary"
                        size="medium">
                        Create Activity
                    </Button>
                </Grid>
            </Grid>

            <Grid container
                spacing={3}
                alignItems="center"
                justify="center"
                style={{ marginTop: '5vh', marginBottom: '5vh' }}
            >
                <Grid item
                    style={{ minWidth: "60%" }}
                >
                    {projectExpend ?
                        <p><spam className={classes.projectRedirectText} onClick={() => { set_projectExpend(false) }}>Projects</spam> / {'test'}</p>
                        :
                        <p>Projects</p>
                    }
                    {projectExpend ? projects_activities : projects}
                </Grid>
            </Grid>

        </div>
    )
}

export default Dashboard
