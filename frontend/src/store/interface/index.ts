export interface UserInfo {
    online: boolean,
    name: string,
    avatar: string,
}

export interface ProjectInfo {
    key: string,
    name: string,
    path: string,
    type: string,
}

export interface VersionInfo {
    name: string,
    type: string,
}

// 主接口(顶级类型声明)
export interface RootStateTypes {
    userInfo: UserInfo;
    projectInfo: ProjectInfo;
    versionInfo: VersionInfo;
}
