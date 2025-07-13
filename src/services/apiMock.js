export const mockUser = {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@iron.com",
};

export function loginMock(email, password) {
    return new Promise((resolve, reject) => {
        if (email === "tony@iron.com" && password === "iron123") {
            resolve({ token: "mock-token-123" });
        } else {
            reject(new Error("Invalid credentials"));
        }
    });
}

export function getUserProfileMock(token) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockUser);
        }, 300);
    });
}

export function updateUserProfileMock(token, updatedData) {
    return new Promise((resolve) => {
        Object.assign(mockUser, updatedData);
        setTimeout(() => {
            resolve(mockUser);
        }, 300);
    });
}
