import '@testing-library/jest-dom';

jest.mock('next/font/google', () => ({
  Inter: jest.fn().mockImplementation(() => ({
    style: {
      fontFamily: 'Inter, sans-serif',
    },
  })),
  Poppins: jest.fn().mockImplementation(() => ({
    style: {
      fontFamily: 'Poppins, sans-serif',
    },
  })),
}));

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      asPath: '/',
      route: '/',
      pathname: '/',
      query: '',
      push: jest.fn(),
    };
  },
  useParams() {
    return {
      slug: 'slug',
      id: 'id',
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return {
      get: jest.fn().mockReturnValue(''),
    };
  },
}));

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (...props: any) => {
    const dynamicModule = jest.requireActual('next/dynamic');
    const dynamicActualComp = dynamicModule.default;
    const RequiredComponent = dynamicActualComp(props[0]);
    RequiredComponent.preload
      ? RequiredComponent.preload()
      : RequiredComponent.render.preload();
    return RequiredComponent;
  },
}));

jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}));
