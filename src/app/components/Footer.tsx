export function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-6 mt-12">
      <div className="space-y-2">
        <p>
          Jeupe House, Utawala – Embakasi • Nairobi • Kenya
        </p>
        <p>
          Tel: +254 721 822 869 / +254 765 869 184 | Email:{" "}
          <a href="mailto:info@hawkeye11companylimited.com" className="text-gold">
            info@hawkeye11companylimited.com
          </a>
        </p>
      </div>
      <p className="text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} Hawkeye 11 Company Limited – All Rights Reserved.
      </p>
    </footer>
  );
}
