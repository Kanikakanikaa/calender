import { useState } from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Calendar from 'react-calendar';

import { Switch } from "@/components/ui/switch" // Adjust this based on your UI lib

export function AppSidebar() {
    const [homeToggle, setHomeToggle] = useState(false)
    const [settingsToggle, setSettingsToggle] = useState(false)
    const [value, onChange] = useState<any>(new Date());

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <div>                   <Calendar onChange={onChange} value={value} />
                                </div>
                                {/* </SidebarMenuButton> */}

                                <SidebarMenuButton asChild>
                                    <div className="flex justify-between items-center w-full">
                                        <a href="#" className="flex items-center gap-2">

                                            <span>Tasks</span>
                                        </a>
                                        <Switch checked={homeToggle} onCheckedChange={setHomeToggle} />
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <div className="flex justify-between items-center w-full">
                                        <a href="#" className="flex items-center gap-2">

                                            <span>Events</span>
                                        </a>
                                        <Switch checked={settingsToggle} onCheckedChange={setSettingsToggle} />
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
