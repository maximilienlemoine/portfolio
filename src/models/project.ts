import { Stack } from "@/models/stack";
import { ProjectGoal } from "@/models/goal";

export type Project = {
    title: string;
    description: string;
    projectLink: string;
    sourceCodeLink: string | null;
    goals: ProjectGoal[];
    stacks: Stack[];
};
