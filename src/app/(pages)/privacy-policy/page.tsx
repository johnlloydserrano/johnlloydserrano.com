import { heroData, privacyPolicyData } from '@/app/data/data';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl my-10 mx-auto p-8">
      <div
        className="h-20 w-20 my-6 rounded-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroData.imageUrl})`,
        }}
        aria-label={heroData.name}
        role="img"
      />
      <h1 className="text-4xl font-bold mb-6 font-acorn color-effect">
        {privacyPolicyData.title}
      </h1>
      <div className="quicksand-regular">
        <p className="mb-4">
          {privacyPolicyData.description}(
          <Link href="/" className="underline hover:decoration-primary">
            {privacyPolicyData.site}
          </Link>
          ).
        </p>
        {privacyPolicyData.items.map(section => (
          <div key={section.number} className="mt-8 mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold">{section.number}.</span>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
            </div>
            <p className="mt-2 mb-4">{section.content}</p>
            {section.list && (
              <ul className="list-disc pl-6 mb-4 font-thin">
                {section.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <p className="mt-8 text-xs text-gray-500">{privacyPolicyData.update}</p>
        <p className="mt-1 text-gray-500 text-xs">{privacyPolicyData.author}</p>
      </div>
    </div>
  );
}
