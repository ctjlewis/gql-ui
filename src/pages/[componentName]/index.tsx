// import { useRouter } from 'next/router'
import { FC } from 'react';

// import {
//   TestHeading as TestHeadingProd,
//   TestButton as TestButtonProd
// } from '../../..'

import TestFieldProd from '../../../dist/Field';
import TestViewProd from '../../../dist/View';

import TestFieldDev from '../../components/Field';
import TestViewDev from '../../components/View';

const Row: FC = ({ children, ...props }) => {
  return (
    <div className="min-h-full min-w-full flex flex-1 flex-row justify-center items-center" {...props}>
      {children}
    </div>
  );
}

const Column: FC = ({ children, ...props }) => {
  return (
    <div className="min-h-full min-w-full flex flex-1 flex-col justify-center items-center" {...props}>
      {children}
    </div>
  );
}

const Centered: FC = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {children}
    </div>
  );
}

const ComponentDemo = () => {
  return (
    <Centered>
      <div className="w-full grid grid-cols-2 gap-8">
        <div className="grid grid-rows-2 gap-8 justify-items-center">
          <h3>Development</h3>
          <TestFieldProd />
          <TestViewDev />
        </div>
        <div className="grid grid-rows-2 gap-8 justify-items-center">
          <h3>Production</h3>
          <TestFieldProd />
          <TestViewProd />
        </div>
      </div>
    </Centered>
  );
  // const router = useRouter();
  // const componentName = router.query.componentName?.toString();
  // if (componentName && componentName in Components) {
  //   const Component = Components[componentName?.toString() ?? ''];
  //   if (Component) {
  //     return (
  //       <Centered>
  //         <Component />
  //       </Centered>
  //     );
  //   }
  // }

  // return null;
};

export default ComponentDemo;