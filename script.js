// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps', unit: 29.37, tag: '' },
        { desc: 'Biotina em gotas 30ml - Tutti Frutti', unit: 13.99, tag: 'novo' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 44.71, tag: '' },
        { desc: 'Reforce Hair 60caps', unit: 19.93, tag: '' },
        { desc: '3 Magnésios 30 Caps', unit: 14.07, tag: '' },
        { desc: 'Cafeína + Beta Alanina Xtra 60caps', unit: 16.40, tag: 'novo' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 16.27, tag: '' },
        { desc: 'Carbonato de Cálcio 60 Caps', unit: 12.28, tag: 'novo' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 28.59, tag: '' },
        { desc: 'Creatina Xtra 300G', unit: 39.65, tag: 'novo' },
        { desc: 'Creatina Gummies - Uva verde 40gomas', unit: 64.75, tag: 'novo' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 44.72, tag: '' },
        { desc: 'Curcumina com colágeno tipo 2 30ml-Gotas', unit: 16.24, tag: 'gotas' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 17.93, tag: '' },
        { desc: 'Colágeno Tipo 2 30cap', unit: 15.38, tag: 'novo' },
        { desc: 'CurcuMAX 95% - Cúrcuma com Pimenta Preta 60 caps - ÂMBAR', unit: 11.35, tag: 'novo' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 25.06, tag: '' },
        { desc: 'CO-MAG 60caps', unit: 26.68, tag: 'novo' },
        { desc: 'D3 + K2 30caps - 2000UI / 159mcg', unit: 9.10, tag: '' },
        { desc: 'Ferrofor + C 60caps', unit: 13.03, tag: '' },
        { desc: 'Feno Grego 60caps', unit: 15.90, tag: '' },
        { desc: 'GABA 400 60caps', unit: 13.37, tag: 'novo' },
        { desc: 'Morofor 120caps', unit: 26.22, tag: 'novo' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 14.68, tag: '' },
        { desc: 'Magnésio Dimalato 60caps', unit: 15.82, tag: '' },
        { desc: 'Magnésio Inositol DIA (Taurina) 210g - Maracujá', unit: 38.12, tag: 'novo' },
        { desc: 'Magnésio Inositol NOITE (Melatonina) 210g - Maracujá', unit: 38.12, tag: 'novo' },
        { desc: 'Magnésio L-Treonato 60caps', unit: 12.57, tag: '' },
        { desc: 'Magnésio L-Treonato 60caps - ÂMBAR', unit: 12.25, tag: 'novo' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 17.99, tag: '' },
        { desc: 'Magnésio Quelato 60caps', unit: 13.67, tag: '' },
        { desc: 'Magnésio Soft 60caps', unit: 8.22, tag: 'novo' },
        { desc: 'Memo Ative 30caps', unit: 10.13, tag: '' },
        { desc: 'Melatokalm Gotas Maracujá 30ml (Melatonina)', unit: 14.85, tag: 'gotas' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 16.98, tag: '' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 21.14, tag: '' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60cap', unit: 24.58, tag: 'novo' },
        { desc: 'Ômega 3 60caps 1gr Softgel', unit: 21.63, tag: 'novo' },
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 23.21, tag: '' },
        { desc: 'PEA-600 60caps', unit: 26.09, tag: 'novo' },
        { desc: 'PEA + Colágeno Tipo 2 60caps', unit: 28.18, tag: 'novo' },
        { desc: 'Picolinato de Cromo 30caps', unit: 10.69, tag: '' },
        { desc: 'PlenaMente 30caps', unit: 15.36, tag: 'novo' },
        { desc: 'Própolis Verde 60caps', unit: 16.47, tag: 'novo' },
        { desc: 'Reartron 60caps', unit: 27.77, tag: '' },
        { desc: 'Vitamina B12 30caps', unit: 11.57, tag: '' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 15.00, tag: 'gotas' },
        { desc: 'Vitamina K2 30caps', unit: 13.54, tag: '' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 9.86, tag: '' },
        { desc: 'SuperVita C 60caps', unit: 15.08, tag: 'novo' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 12.70, tag: '' },
        { desc: 'Ashwagandha 60caps', unit: 17.59, tag: 'novo' },
        { desc: 'Amora Miúra 60caps', unit: 14.65, tag: '' },
        { desc: 'Amora com Isoflavona 60caps', unit: 14.23, tag: '' },
        { desc: 'Calmim 60cap', unit: 15.02, tag: '' },
        { desc: 'Canela de Velho + Sucupira 60caps', unit: 13.54, tag: '' },
        { desc: 'Carvão Vegetal 60caps', unit: 14.11, tag: '' },
        { desc: 'Castanha da Índia 60cap', unit: 14.18, tag: '' },
        { desc: 'Cloreto de Magnésio PA 60caps', unit: 12.86, tag: '' },
        { desc: 'Cloreto de Magnésio PA + Sucupira 60cap', unit: 13.43, tag: '' },
        { desc: 'Colágeno Hidrolisado 60caps', unit: 14.40, tag: '' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60caps', unit: 14.12, tag: '' },
        { desc: 'Espinheira Santa 60caps', unit: 14.30, tag: '' },
        { desc: 'Ginkgo Biloba 60cap', unit: 14.13, tag: '' },
        { desc: 'Ginkgo + Castanha 60caps', unit: 15.33, tag: '' },
        { desc: 'L-Treonato Magnésio 60caps', unit: 16.32, tag: '' },
        { desc: 'Maca Peruana Negra 60caps', unit: 15.60, tag: '' },
        { desc: 'Mais Ativa 60caps', unit: 13.72, tag: '' },
        { desc: 'Óleo de Copaíba 1000mg 60cap', unit: 19.51, tag: 'novo' },
        { desc: 'Óleo de Sucupira 1000mg 60cap', unit: 18.72, tag: 'novo' },
        { desc: 'Ora Pro Nóbis 60caps', unit: 14.31, tag: '' },
        { desc: 'Seca Barriga com Laranja MORO 60caps', unit: 14.05, tag: '' },
        { desc: 'Tibulus Terrestris 40% 60caps', unit: 13.54, tag: '' },
        { desc: 'Tribulus + Maca Peruana 60caps', unit: 13.58, tag: '' },
        { desc: 'Uxi Amarelo + Unha de Gato 60caps', unit: 13.53, tag: '' },
        { desc: 'Valeriana 60caps', unit: 16.49, tag: '' },
      ]
    }
  ];

    const container = document.getElementById('tabela-container');

  tableData.forEach(brandData => {
    const tbl = document.createElement('table');
    tbl.className = 'table-brand';

    const colgroup = document.createElement('colgroup');
    ['60%', '20%', '20%'].forEach(w => {
      const col = document.createElement('col');
      col.style.width = w;
      colgroup.appendChild(col);
    });
    tbl.appendChild(colgroup);

    const bannerRow = document.createElement('tr');
    const bannerCell = document.createElement('th');
    bannerCell.colSpan = 3;
    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'brand-banner';
    bannerDiv.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(brandData.colorVar);
    const img = document.createElement('img');
    img.src = brandData.logo;
    img.alt = brandData.brand;
    bannerDiv.appendChild(img);
    bannerDiv.append(brandData.brand);
    bannerCell.appendChild(bannerDiv);
    bannerRow.appendChild(bannerCell);

    const thead = document.createElement('thead');
    thead.appendChild(bannerRow);
    const hdr = document.createElement('tr');
    hdr.innerHTML = `<th>Descrição do Produto</th><th>Unidade</th><th>Caixa (12 unidades)</th>`;
    thead.appendChild(hdr);
    tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    brandData.items.forEach(item => {
      const tr = document.createElement('tr');
      const tdDesc = document.createElement('td');
      tdDesc.textContent = item.desc;
      if (item.tag) {
        const span = document.createElement('span');
        span.className = `tag ${item.tag}`;
        span.textContent = item.tag.toUpperCase();
        tdDesc.appendChild(span);
      }
      tr.appendChild(tdDesc);

      const tdUnit = document.createElement('td');
      tdUnit.textContent = `R$ ${item.unit.toFixed(2)}`;
      tr.appendChild(tdUnit);

      const tdBox = document.createElement('td');
      tdBox.textContent = `R$ ${(item.unit * 12).toFixed(2)}`;
      tr.appendChild(tdBox);

      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    container.appendChild(tbl);
  });

 // Por este:
document.getElementById('btn-export').addEventListener('click', () => {
  window.print();
});

  document.getElementById('btn-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('btn-theme');
    btn.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro';
  });
});













