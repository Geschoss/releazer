import { ReleaseDto } from '../../../typings/dto';

const releaseMoks: ReleaseDto[] = [
    {
        title: 'muscle-car-daniel',
        genre: 'Pop',
        label: 'Bad Ass Records',
        upc: 'some upc',
        tracks: 23,
        format: 'mp3',
        releaseDate: '20-12-2020',
        artists: ['Den MC', 'Paul MC'],
    },
    {
        title: 'muscle-car-daniel',
        genre: 'Pop',
        label: 'Bad Ass Records',
        upc: 'some upc',
        tracks: 23,
        format: 'mp3',
        releaseDate: '20-12-2020',
        artists: ['Den MC', 'Paul MC'],
    },
    {
        title: 'muscle-car-daniel',
        genre: 'Pop',
        label: 'Bad Ass Records',
        upc: 'some upc',
        tracks: 23,
        format: 'mp3',
        releaseDate: '20-12-2020',
        artists: ['Den MC', 'Paul MC'],
    },
];

export const fetchReleases = () => {
    return new Promise<ReleaseDto[]>((resolve) => {
        setTimeout(() => resolve(releaseMoks), 1000);
    });
};
