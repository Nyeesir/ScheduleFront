import { NavLink } from '@mantine/core';
import {IconDoor, IconUser, IconUsers} from '@tabler/icons-react'
// import {IconCategory, IconGauge} from '@tabler/icons-react';

let mockGoupProps = [
    {
        name: "Biofizyka 1 stopnia",
        hasSchedule: true,
        children: [
            {
                name: "BF-1 rok",
                hasSchedule: true,
                children: [
                    {
                        name: "BF/ I stopień/ 1rok / gr. 1",
                        hasSchedule: true
                    }
                ]
                
            },
            {
                name: "BF-2 rok",
                hasSchedule: true,
                children: [
                    {
                        name: "BF/ I stopień/ 2rok",
                        hasSchedule: true
                    }
                ]
            },
            {
                name: "BF-3 rok",
                hasSchedule: true,
                children: [
                    {
                        name: "BBF/ I stopień/ 3rok/ Biofizyka molekularna",
                        hasSchedule: true
                    },
                    {
                        name: "BF/ I stopień/ 3rok/ Optometria",
                        hasSchedule: true
                    }
                ]
            }
        ]
    }
]

let mockTeacherProps = [
    {
        name: "Chemia",
        hasSchedule: false,
        children: [
            {
                name: "doktoranci",
                hasSchedule: false,
                children: [
                    {
                        name: "Bednarska-Adam Nikola",
                        hasSchedule: true,
                    }
                ]
            },
            {
                name: "inni nauczyciele",
                hasSchedule: false,
                children: [
                    {
                        name: "Bakalarz Dominik",
                        hasSchedule: true,
                    }
                ]
            },
            {
                name: "pracownicy",
                hasSchedule: false,
                children: [
                    {
                        name: "Bąk andrzej",
                        hasSchedule: true,
                    },
                    {
                        name: "Bartczak Piotr",
                        hasSchedule: true,
                    }
                ]
            }
        ]
    }
]

let mockRoomProps = [
    {
        name: "Katowice",
        hasSchedule: false,
        children: [
            {
                name: "AWF",
                hasSchedule: false,
                children: [
                    {
                        name: " AWF Katedra Podstaw Fizjoterapii",
                        hasSchedule: true,
                    }
                ]
            }
        ]
    }
]

let mockPropsGrouped = [
    {
        name: "Grupy",
        haseSchedule: false,
        icon: <IconUsers/>,
        children: mockGoupProps
    },
    {
        name: "Nauczyciele",
        haseSchedule: false,
        icon: <IconUser/>,
        children: mockTeacherProps
    },
    {
        name: "Sale",
        haseSchedule: false,
        icon: <IconDoor/>,
        children: mockRoomProps
    },
]

function logSmth(){
    console.log("smth")
}



export default function SideNavBar() {
    return (
        <div style={{width:'20%', float:'left'}}>
            {mockPropsGrouped.map((mainCategory =>
                <NavLink label={mainCategory.name} href={"#"} leftSection={mainCategory.icon}>
                    {mainCategory.children.map(subcategory => (
                        <NavLink label={subcategory.name} href={"#"}>
                            {subcategory.children.map(preciseCategory =>
                                <NavLink label={preciseCategory.name} href={"#"}>
                                    {preciseCategory.children.map(listing =>
                                        <NavLink label={listing.name} href={"#"} onClick={logSmth}/>
                                    )}
                                </NavLink>
                            )}
                        </NavLink>
                    ))}
                </NavLink>))}
            {/*<NavLink label={"Grupy"} href={"#"} childrenOffset={20} leftSection={<IconUsers size={20}/>}>*/}
            {/*    */}
            {/*</NavLink>*/}
            {/*<NavLink label={"Nauczyciele"} href={"#"} childrenOffset={20} leftSection={<IconUser size={20}/>}>*/}

            {/*</NavLink>*/}
            {/*<NavLink label={"Sale"} href={"#"} childrenOffset={20} leftSection={<IconDoor size={20}/>}>*/}
            {/*    {mockRoomProps.map(location =>*/}
            {/*        <NavLink label={location.name} href={"#"} childrenOffset={20}>*/}
            {/*            {location.children.map(building =>*/}
            {/*                <NavLink label={building.name} href={"#"} childrenOffset={20}>*/}
            {/*                    {building.children.map(room =>*/}
            {/*                        <NavLink label={room.name} href={"#"} childrenOffset={20}></NavLink>*/}
            {/*                    )}*/}
            {/*                </NavLink>*/}
            {/*            )}    */}
            {/*        </NavLink>*/}
            {/*    )}*/}
            {/*</NavLink>*/}
            
            
            
            
            {/*<NavLink*/}
            {/*    href="#required-for-focus"*/}
            {/*    label="Grupy"*/}
            {/*    leftSection={<IconGauge size={16} stroke={1.5} />}*/}
            {/*    childrenOffset={20}*/}
            {/*>*/}
            {/*    <NavLink label="Biofizyka 1 stopnia" href="#">*/}
            {/*        <NavLink label="BF-1 rok" href="#">*/}
            {/*            <NavLink label="BF/ I stopień/ 1rok / gr. 1" href="#"></NavLink>*/}
            {/*        </NavLink>*/}
            {/*        <NavLink label="BF-2 rok" href="#">*/}
            {/*            <NavLink label="BF/ I stopień/ 2rok" href="#"></NavLink>*/}
            {/*        </NavLink>*/}
            {/*        <NavLink label="BF-3 rok">*/}
            {/*            <NavLink label="BF/ I stopień/ 3rok/ Biofizyka molekularna" href="#"></NavLink>*/}
            {/*            <NavLink label="BF/ I stopień/ 3rok/ Optometria" href="#"></NavLink>*/}
            {/*        </NavLink>*/}
            {/*    </NavLink>*/}
            {/*</NavLink>*/}
            
            {/*<NavLink*/}
            {/*    href="#"*/}
            {/*    label="Nauczyciele"*/}
            {/*    leftSection={<IconGauge size={16} stroke={1.5} />}*/}
            {/*    childrenOffset={20}*/}
            {/*>*/}
            {/*    <NavLink label="Chemia" href="#">*/}
            {/*        <NavLink label="Doktoranci" href="#">*/}
            {/*            <NavLink label="Bednarska-Adam Nikola" href="#"></NavLink>*/}
            {/*        </NavLink>*/}
            {/*        <NavLink label=" inni nauczyciele" href="#">*/}
            {/*            <NavLink label="Bakalarz Dominik" href="#"></NavLink>*/}
            {/*        </NavLink>*/}
            {/*        <NavLink label="pracownicy" href="#">*/}
            {/*            <NavLink label="Bąk Andrzej" href="#"></NavLink>*/}
            {/*            <NavLink label="Bartczak Piotr" href="#"></NavLink>*/}
            {/*        </NavLink>*/}
            {/*    </NavLink>*/}
            {/*</NavLink>*/}
            
            {/*<NavLink*/}
            {/*    href="#"*/}
            {/*    label="Sale"*/}
            {/*    leftSection={<IconGauge size={16} stroke={1.5} />}*/}
            {/*    childrenOffset={20}*/}
            {/*>*/}
            {/*    <NavLink label="Katowice" href="#">*/}
            {/*        <NavLink label="Awf" href="#">*/}
            {/*            <NavLink label="AWF Katedra Podstaw Fizjoterapii" href="#"></NavLink>*/}
            {/*        </NavLink>*/}
            {/*    </NavLink>*/}
            {/*</NavLink>*/}
        </div>
    );
}