export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-gray-900">adidas Team</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Pedro Silva - VP Talent Organization</li>
              <li>Karina - Senior Leadership</li>
              <li>Lucas - L&D Technical Liaison</li>
              <li>Divya Jhamb - Learning Initiatives India</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Baresquare Team</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Georgios Grigoriadis - CEO</li>
              <li>Lars Boeddener - COO</li>
              <li>Nikos Vogiatzis - Technical Lead</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>georgios@baresquare.com</li>
              <li>lars@baresquare.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>adidas AI Learning & Leadership Development Initiative - Project Hub</p>
          <p className="mt-1">Last Updated: November 21, 2025</p>
        </div>
      </div>
    </footer>
  );
}
