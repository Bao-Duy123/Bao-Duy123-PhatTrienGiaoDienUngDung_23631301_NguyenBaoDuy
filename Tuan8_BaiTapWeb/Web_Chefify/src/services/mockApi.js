// Mock API Service - Simulates fetching data from backend
// Này là hướng dẫn học tốt cho sinh viên: tách logic lấy dữ liệu ra service riêng

import brandLogo from '../../data/Lab_02/chefify.png';
import userAvatar from '../../data/Lab_02/avatar.png';
import heroBackground from '../../data/Lab_01/Image 73.png';
import introSlideA from '../../data/Lab_03/Bean, shrimp, and potato salad.png';
import introSlideB from '../../data/Lab_03/lotus_delight_salad.png';
import introSlideC from '../../data/Lab_03/salad_with_cabbage_and_shrimp.png';
import loginCoverImage from '../../data/Lab_01/Image 72.png';
import signupGraphic from '../../data/Lab_03/avatar.png';
import footerLogo from '../../data/Lab_04/white_chefify.png';

const API_DELAY = 300; // Simulate network delay

export const mockApi = {
    // Fetch app branding images
    async getBrandingImages() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    brandLogo,
                    userAvatar,
                    heroBackground,
                    loginCoverImage,
                    signupGraphic,
                    footerLogo,
                });
            }, API_DELAY);
        });
    },

    // Fetch intro slides
    async getIntroSlides() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([{
                        title: 'Discover Chefify',
                        description: 'Easy and delicious cooking instructions right here. Start exploring now!',
                        image: introSlideA,
                    },
                    {
                        title: 'Find Recipes Fast',
                        description: 'Browse simple meals for family dinner and save your favorite ideas.',
                        image: introSlideB,
                    },
                    {
                        title: 'Cook With Confidence',
                        description: 'Step-by-step instructions and tips to improve your daily cooking routine.',
                        image: introSlideC,
                    },
                ]);
            }, API_DELAY);
        });
    },

    // Fetch recipe of the day
    async getRecipeOfDay() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    title: 'Salad Caprese',
                    description: 'Classic Italian salad made with fresh mozzarella, herbs and olive oil to create a refreshing dish.',
                    tag: 'Recipe of the day',
                });
            }, API_DELAY);
        });
    },

    // Fetch footer links
    async getFooterData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    learnMore: [
                        { label: 'Our Cooks', href: '#' },
                        { label: 'See Our Features', href: '#' },
                        { label: 'FAQ', href: '#' },
                    ],
                    recipes: [
                        { label: 'What to Cook This Week', href: '#' },
                        { label: 'Pasta', href: '#' },
                        { label: 'Dinner', href: '#' },
                        { label: 'Healthy', href: '#' },
                    ],
                    about: {
                        title: 'About Us',
                        description: 'Welcome to our website, a wonderful place to explore and learn how to cook like a pro.',
                    },
                    company: '2023 Chefify Company',
                });
            }, API_DELAY);
        });
    },

    // Fetch social auth providers
    async getSocialProviders() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { name: 'Google', icon: 'G', color: 'text-red-500', bgColor: 'bg-rose-50' },
                    { name: 'Facebook', icon: 'f', color: 'text-blue-600', bgColor: 'bg-slate-100' },
                    { name: 'Apple', icon: 'A', color: 'text-zinc-900', bgColor: 'bg-zinc-100' },
                ]);
            }, API_DELAY);
        });
    },
};